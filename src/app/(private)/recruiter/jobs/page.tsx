
'use client'

import { getJobsOfRecruiter } from '@/actions/jobs'
import PageTitle from '@/components/functional/page-title'
import { Button } from '@/components/ui/button'
import InfoMessage from '@/components/ui/info-message'
import Spinner from '@/components/ui/spinner'
import { IJob } from '@/interfaces'
import useUsersStore, { IUsersStore } from '@/store/users-store'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import dayjs from "dayjs"

function RecruiterJobsPage() {
  const [jobs, setJobs] = useState<IJob[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { user }: IUsersStore = useUsersStore() as IUsersStore

  const fetchJobs = async () => {
    setLoading(true)
    const response: any = await getJobsOfRecruiter(user?.id!)
    if (response.success) {
      setJobs(response.data)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      fetchJobs()
    }
  }, [user])

  const columns = [
    'Título da Vaga',
    'Local',
    'Tipo',
    'Postado em',
    'Status',
    'Ação',
  ]

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex justify-between items-center">
        <PageTitle title='Vagas de Emprego' />
        <Button className='flex items-center gap-1'>
          <Plus size={14} />
          <Link href="/recruiter/jobs/add">
            Criar Nova Vaga
          </Link>
        </Button>
      </div>

      {loading && <Spinner parentHeight='200px' />}

      {!loading && jobs.length === 0 && <InfoMessage message='Não há vagas criadas ainda.' />}

      {!loading && jobs.length > 0 && (
        <div className='mt-6'>
          <Table>
            <TableHeader>
              <TableRow className='bg-gray-200'>
                {columns.map((column) => <TableHead className="font-bold" key={column}>{column}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.job_type}</TableCell>
                  <TableCell>{dayjs(job.created_at).format('DD/MM/YYYY hh:mm A')}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

export default RecruiterJobsPage