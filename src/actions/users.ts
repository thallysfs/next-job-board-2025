'use server'

import supabaseConfig from "@/config/supabase-config"
import { IUser } from "@/interfaces"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { success } from "zod"

export const registerUser = async (payload: Partial<IUser>) => {
  try {

    // passo 1 - checar se usuário existe
    const userExists = await supabaseConfig
      .from("user_profiles")
      .select("*")
      .eq("email", payload.email)
    
      if(userExists.error) {
        throw new Error(userExists.error.message)
      }

      if(userExists.data && userExists.data.length > 0) {
        throw new Error("Usuário com esse email já existe")
      }

    // passo 2 - hash do password
    payload.password = await bcrypt.hash(payload.password || "", 10)


    // passo 3 - inserir o usuário dentro do banco
    const  insertUser = await supabaseConfig
      .from("user_profiles")
      .insert([payload])
    
    if(insertUser.error) {
      throw new Error(insertUser.error.message)
    }
    
    return {
      success: true,
      message: "Usuário registrado com sucesso"
    }
    
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const loginUser = async (payload: Partial<IUser>) => {
  try {
    // passo 1: pegar user do banco
    const userResponse = await supabaseConfig
      .from("user_profiles")
      .select("*")
      .eq("email", payload.email)
    
      if( userResponse.error || userResponse.data.length === 0 ) {
        throw new Error("Uuário não encontrado")
      }

    // passo 2: compare a senha e a regra
    const user = userResponse.data[0]
    if(user.role !== payload.role) {
      throw new Error("Regra inválida")
    }

    const isPasswordValid = await bcrypt.compare(
    payload.password || "",
    user.password || ""
    )

    if(!isPasswordValid) {
      throw new Error("Senha inválida")
    }

    // passo 3: gerar jwt e retornar
    const dataTobeSigned = {
      id: user.id,
      email: user.email

    }

    const token = jwt.sign(dataTobeSigned, process.env.JWT_SECRET!, {
      expiresIn: "3d"
    })

    return {
      success: true,
      message: "Login efetuado com sucesso",
      data: token
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}