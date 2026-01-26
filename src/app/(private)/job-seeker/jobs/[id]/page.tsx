import { getJobById } from '@/actions/jobs'
import InfoMessage from '@/components/ui/info-message'
import { IJob } from '@/interfaces'
import React from 'react'

interface JobDetailsPageProps {
  params: Promise<{ id: number }>
}


async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params
  const jobResponse = await getJobById(id)

  if (!jobResponse.success) {
    return <InfoMessage message='Falha ao carregar os detalhes da vaga' />
  }

  const job: IJob = jobResponse.data

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-bold text-gray-700">
            {job.title}
          </h1>
          <h1 className="text-xs text-gray-500">
            De: {job.recruiter.name}
          </h1>
        </div>
        <div className='h-max bg-blue-100 text-blue-600 border border-blue-600 px-2 py-1 rounded capitalize text-xs font-medium items-center'>
          {job.job_type.replace("-", " ")}
        </div>
      </div>
    </div>
  )
}

export default JobDetailsPage