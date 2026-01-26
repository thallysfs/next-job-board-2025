import { getJobById } from '@/actions/jobs'
import React from 'react'

interface JobDetailsPageProps {
  params: Promise<{ id: number }>
}


async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params
  const jobResponse = await getJobById(id)


  return (
    <div>JobDetailsPage</div>
  )
}

export default JobDetailsPage