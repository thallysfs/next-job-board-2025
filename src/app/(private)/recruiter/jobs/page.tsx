import PageTitle from '@/components/functional/page-title'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function RecruiterJobsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title='Vagas de Emprego' />
        <Button className='flex items-center gap-1'>
          <Plus size={14} />
          <Link href="/recruiter/jobs/add">
            Criar Nova Vaga
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default RecruiterJobsPage