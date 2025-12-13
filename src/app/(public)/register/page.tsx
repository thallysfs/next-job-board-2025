"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { userRoles } from "@/constants/index.ts"
import { MoveLeft } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome precisa ter pelo menos dois caracteres" }),
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().min(6, { message: "A senha precisa ter pelo menos dois caracteres" }),
  role: z.string().optional(),
})

function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "job-seeker",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className='bg-gray-200 flex justify-center items-center h-screen'>
      <div className='bg-white shadow rounded p-5 flex flex-col w-[450px]'>
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-bold text-lg">
            Registre sua conta
          </h1>
          <Button variant={'ghost'} className='flex items-center'>
            <MoveLeft className='text-gray-500' />
            <Link href="/" className='text-xs'>Home</Link>
          </Button>
        </div>

        <hr
          className='border border-gray-300 my-4'
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl className='select'>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {
                            userRoles.map((role) => (
                              <SelectItem key={role.value} value={role.value}>
                                {role.label}
                              </SelectItem>
                            ))
                          }
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button type="submit" className='w-full mt-2'>Registrar</Button>

            <div className='flex justify-center gap-1'>
              <h1 className='text-sm'>Já tem uma conta?</h1>
              <Link href="/login" className='text-sm underline'>
                Login
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPage