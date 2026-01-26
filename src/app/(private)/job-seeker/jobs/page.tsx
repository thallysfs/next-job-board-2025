import { getAllActiveJobs } from '@/actions/jobs'
import JobCard from '@/components/functional/job-card'
import PageTitle from '@/components/functional/page-title'
import InfoMessage from '@/components/ui/info-message'
import { IJob } from '@/interfaces'
import React from 'react'

async function JobsList() {
  const jobsResponse: any = await getAllActiveJobs({})
  let jobs: IJob[] = []

  if (jobsResponse?.success) {
    jobs = jobsResponse.data
  }

  return (
    <div className='flex flex-col gap-5'>
      <div>
        <PageTitle title='Navegar nas Vagas' />
        <span className="text-xs text-gray-600">
          Encontre a sua próxima oportunidade
        </span>
      </div>

      {jobs.length === 0 && (<InfoMessage message='Não existe nenhuma vaga ativa no momento.' />)}

      {jobs.length > 0 && <div className="flex flex-col gap-5">
        {jobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>}

    </div>
  )
}

export default JobsList