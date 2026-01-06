'use client'

import { getLoggedInUser } from '@/actions/users'
import { IUser } from '@/interfaces'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

function RecruiterDashboardPage() {
  const [user, setUser] = useState<IUser | null>(null)

  const fetchUser = async () => {
    const response = await getLoggedInUser()
    if (!response.success) {
      toast.error(response.message)
      return
    }
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>RecruiterDashboardPage</div>
  )
}

export default RecruiterDashboardPage