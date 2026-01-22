import JobForm from '@/components/functional/job-form'
import PageTitle from '@/components/functional/page-title'
import React from 'react'

function AddJobPage() {
  return (
    <div className='flex flex-col gap-5'>
      <PageTitle title='Adicionar Nova Vaga' />

      <JobForm />
    </div>
  )
}

export default AddJobPage