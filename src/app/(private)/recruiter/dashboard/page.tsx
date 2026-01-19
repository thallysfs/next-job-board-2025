'use client'

import { getLoggedInUser } from '@/actions/users'
import LogoutButton from '@/components/functional/logout-btn'
import { IUser } from '@/interfaces'
import useUsersStore, { IUsersStore } from '@/store/users-store'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function RecruiterDashboardPage() {
  const { user } = useUsersStore() as IUsersStore

  return (
    <div className='flex flex-col gap-5 p-5'>
      <h1>Recrutador Dashboard</h1>
      {user && (
        <div className='flex flex-col border p-5 w-max border-gray-300'>
          <h1>Id: {user.id}</h1>
          <h1>Nome do usuário: {user.name}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Categoria: {user.role}</h1>
          <LogoutButton />
        </div>
      )}
    </div>

  )
}

export default RecruiterDashboardPage