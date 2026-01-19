import React, { useEffect, useState } from 'react'
import Header from './header'
import { getLoggedInUser } from '@/actions/users'
import toast from 'react-hot-toast'
import useUsersStore, { IUsersStore } from '@/store/users-store'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { setUser } = useUsersStore() as IUsersStore
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchUser = async () => {
    setLoading(true)
    const response = await getLoggedInUser()
    if (!response.success) {
      toast.error(response.message)
      Cookie.remove("token")
      router.push("/login")
      return
    }
    setUser(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) {
    <div className='flex justify-center items-center h-screen'>
      Carregando...
    </div>
  }

  return (
    <div>
      <Header />

      <div className="p-5">
        {children}
      </div>
    </div>
  )
}

export default PrivateLayout