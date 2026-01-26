'use server'

import supabaseConfig from "@/config/supabase-config"
import { IJob } from "@/interfaces"
import { success } from "zod"

export const createJob = async (payload: Partial<IJob>) => {
  try {
    const insertJob = await supabaseConfig
      .from("jobs")
      .insert([payload])
    if(insertJob.error) {
      throw new Error(insertJob.error.message)
    }

    return {
      success: true,
      message: "Vaga de emprego criada com sucesso"
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const getJobById = async (jobId: number) => {
  try {
    const jobResponse = await supabaseConfig
      .from("jobs")
      .select("")
      .eq("id", jobId)

    if(jobResponse.error || jobResponse.data.length === 0) {
      throw new Error("Vaga não encontrada")
    }

    const job = jobResponse.data[0]

    return {
        success: true,
        data: job
    }

  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const editJobById = async (jobId: number, payload: Partial<IJob>) => {
  try {
    const updateJob = await supabaseConfig
      .from("jobs")
      .update(payload)
      .eq("id", jobId)
    
      if(updateJob.error) {
        throw new Error(updateJob.error.message)
      }

      return {
        success: true,
        message: "Vaga de emprego criada com sucesso"
      }

  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const deleteJobById = async (jobId: number) => {

  try {
    const deleteJob = await supabaseConfig.from("jobs").delete().eq("id", jobId)
  
    if(deleteJob.error) {
      throw new Error(deleteJob.error.message)
    }
  
    return {
      success: true,
      message: "Vaga deletada com sucesso"
    }
    
  } catch (error: any) {
    return {
      success: false,
      message: error.message
    }
  }
}

export const getJobsOfRecruiter = async (recruiterId: number) => {
  try {
    const jobsResponse = await supabaseConfig
      .from("jobs")
      .select("*")
      .eq("recruiter_id", recruiterId)
      .order("created_at", { ascending: false });
    if (jobsResponse.error) {
      throw new Error(jobsResponse.error.message);
    }
    return {
      success: true,
      data: jobsResponse.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getAllActiveJobs = async (filters: any) => {
  try {
    const jobsResponse = await supabaseConfig
      .from("jobs")
      .select("*, recruiter:user_profiles(name, id)")
      .eq("status", "open")
      .order("created_at", { ascending: false})

    if(jobsResponse.error) {
      throw new Error(jobsResponse.error.message)
    }

    return {
      success: true,
      data: jobsResponse.data
    }
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message 
    }
  }
}