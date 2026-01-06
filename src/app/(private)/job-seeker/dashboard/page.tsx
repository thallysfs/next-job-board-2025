import { getLoggedInUser } from '@/actions/users'
import { IUser } from '@/interfaces'
import React from 'react'

async function JobSeekerDashboardPage() {
  const response = await getLoggedInUser()
  if (!response.success) {
    return <div>{response.message}</div>
  }

  const user: IUser = response.data

  return (
    <div className='flex flex-col gap-5 p-5'>
      <h1>Candidato Dashboard</h1>
      <div className='flex flex-col border p-5 w-max border-gray-300'>
        <h1>Id: {user.id}</h1>
        <h1>Nome do usuário: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <h1>Categoria: {user.role}</h1>
      </div>
    </div>
  )
}

export default JobSeekerDashboardPage