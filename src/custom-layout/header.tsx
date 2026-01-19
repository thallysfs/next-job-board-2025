import { Button } from '@/components/ui/button'
import SideBarMenuItems from '@/components/ui/sidebar-menuitems'
import useUsersStore, { IUsersStore } from '@/store/users-store'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'

function Header() {
  const { user } = useUsersStore() as IUsersStore
  const [openMenuItems, setOpenMenuItems] = useState(false)

  return (
    <div className='bg-primary p-5 flex justify-between items-center'>
      <h1 className="text-white font-bold text-2xl">Próxima contratação</h1>

      <div className='flex gap-5 items-center'>
        <h1 className='text-sm text-white'>
          {user?.name} ({user?.role})
        </h1>
        <Button
          onClick={() => setOpenMenuItems(true)}
        >
          {" "}
          <Menu color='white' size={15} />
        </Button>
      </div>

      <SideBarMenuItems
        openMenuItems={openMenuItems}
        setOpenMenuItems={setOpenMenuItems}
        role={user?.role || ""}
      />
    </div>
  )
}

export default Header