import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

function LogoutButton() {

  const onLogout = () => {
    const router = useRouter()
    Cookie.remove("token")
    Cookie.remove("role")
    toast.success("Saiu com sucesso!")
    router.push("/login")
  }

  return (
    <div>
      <Button className='flex items-center gap-1'
        onClick={onLogout}
      >
        <LogOut size={15} />
        Logout
      </Button>
    </div>
  )
}

export default LogoutButton