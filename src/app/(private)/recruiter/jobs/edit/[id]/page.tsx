import { getJobById } from '@/actions/jobs'
import JobForm from '@/components/functional/job-form'
import PageTitle from '@/components/functional/page-title'
import InfoMessage from '@/components/ui/info-message'
import React from 'react'

interface EditJobPageProps {
  params: Promise<{ id: string }>
}

async function EditJobPage({ params }: EditJobPageProps) {
  const { id }: any = await params
  const response = await getJobById(id)

  if (!response.success || !response.data) {
    return <InfoMessage message='Vaga não encontrada' />
  }

  return (
    <div className='flex flex-col gap-5'>
      <PageTitle title='Editar vaga' />

      <JobForm
        formType='edit'
        initialValues={response.data}
      />
    </div>
  )
}

export default EditJobPage