'use client'

import { IJob } from '@/interfaces'
import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Upload } from 'lucide-react'

function ApplyJobSection({ job }: { job: IJob }) {
  const [coverLetter, setCoverLetter] = useState('')
  const [selectedResumeFile, setSelectedResumeFile] = useState<File | null>(null)

  return (
    <div className='border border-gray-300 p-5 flex flex-col gap-5 rounded-xl'>
      <h1 className='text-lg font-bold'>Aplicar a vaga</h1>

      <div className='flex flex-col gap-1'>
        <label htmlFor="cover-letter" className='text-sm text-gray-600' >Apresentação</label>
        <Textarea
          id='cover-letter'
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder='Faça uma apresentação rápida'
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor="cover-letter" className='text-sm text-gray-600' >Anexar currículo</label>
        <Input
          type='file'
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setSelectedResumeFile(e.target.files[0])
            }
          }}
          id='resume-selection'
          className='bg-gray-100 hidden'
        />

        <label htmlFor="resume-selection" className='text-sm p-2 flex justify-center items-center gap-5 rounded border-2 border-dashed border-gray-400 text-gray-500 cursor-pointer'>
          <Upload
            size={12}
          />
          Selecione o arquivo
        </label>

        {
          selectedResumeFile && (
            <div className='text-xs text-gray-700 mt-2'>
              Arquivo selecionado: {selectedResumeFile.name}
            </div>
          )
        }

      </div>

      <Button
        className='w-full'
        disabled={!coverLetter || !selectedResumeFile}
      >
        Aplicar a Vaga
      </Button>
    </div>
  )
}

export default ApplyJobSection