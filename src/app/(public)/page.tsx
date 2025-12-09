import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function HonePage() {
  return (
    <div>
      <div className='px-20 flex justify-between py-5 bg-primary'>
        <h1 className='font-bold text-2xl text-white'>Next-Hire</h1>
        <Button variant={'outline'}>
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>

      <div className='grid grid-cols-2 min-h-[80vh] items-center px-20 mt-5'>
        <div className='col-span-1 flex flex-col items-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-primary text-4xl font-bold'>Ache o emprego dos seus sonhos</h1>
            <p className="text-sm font-semibold text-gray-600">
              Bem vindo ao Nexst-Hire Job Board - Sua plataforma para descobrir oportunidades.
              Nabegar entre empregos, aplicar facilmente, ou postar vagas abertas para candidatos
              qualificados.
            </p>
            <Button>
              <Link href={"/register"}>Começar</Link>
            </Button>
          </div>
        </div>
        <div className='col-span-1 flex justify-center'>
          <img 
            src={'https://next-job-board-2025.vercel.app/hero.png'}
            className='object-contain h-96'
          />
        </div>
      </div>
    </div>
  )
}

export default HonePage