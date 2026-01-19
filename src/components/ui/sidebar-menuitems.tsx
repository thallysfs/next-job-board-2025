import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { boolean } from "zod"
import { LayoutDashboard, Briefcase, FileText, UserSquare } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../functional/logout-btn";

interface SideBarMenuItemsProps {
  openMenuItems: boolean;
  setOpenMenuItems: (open: boolean) => void;
  role: string;
}

function SideBarMenuItems({ openMenuItems, setOpenMenuItems, role }: SideBarMenuItemsProps) {
  const iconSize = 15;
  const pathname = usePathname()
  const router = useRouter()


  const jobSeekerMenuItems: any = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={iconSize} />,
      path: "/job-seeker/dashboard",
    },
    {
      title: "Vagas",
      icon: <Briefcase size={iconSize} />,
      path: "/job-seeker/jobs",
    },
    {
      title: "Aplicações",
      icon: <FileText size={iconSize} />,
      path: "/job-seeker/applications",
    },
    {
      title: "Perfil",
      icon: <UserSquare size={iconSize} />,
      path: "/job-seeker/profile",
    },
  ];

  const recruiterMenuItems: any = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={iconSize} />,
      path: "/recruiter/dashboard",
    },
    {
      title: "Minhas vagas",
      icon: <Briefcase size={iconSize} />,
      path: "/recruiter/jobs",
    },
    {
      title: "Aplicações",
      icon: <FileText size={iconSize} />,
      path: "/recruiter/applications",
    },
    {
      title: "Perfil",
      icon: <UserSquare size={iconSize} />,
      path: "/recruiter/profile",
    },
  ];

  const menuItemsToRender = role === "recruiter" ? recruiterMenuItems : jobSeekerMenuItems

  return (
    <Sheet
      open={openMenuItems}
      onOpenChange={setOpenMenuItems}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-14 px-10 py-10">
          {
            menuItemsToRender.map((item: any) => (
              <div
                onClick={() => {
                  router.push(item.path)
                  setOpenMenuItems(false)
                }}
                className={`cursor-pointer p-3 flex gap-3 items-center ${pathname === item.path ? 'bg-gray-100 rounded-lg border border-primary' : ''}`}
                key={item.title}
              >
                {item.icon}
                <span className="text-sm">{item.title}</span>
              </div>
            ))
          }

          <LogoutButton />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideBarMenuItems