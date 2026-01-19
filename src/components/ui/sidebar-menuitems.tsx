import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { boolean } from "zod"

interface SideBarMenuItemsProps {
  openMenuItems: boolean;
  setOpenMenuItems: (open: boolean) => void;
  role: string;
}

function SideBarMenuItems({ openMenuItems, setOpenMenuItems, role }: SideBarMenuItemsProps) {
  return (
    <Sheet
      open={openMenuItems}
      onOpenChange={setOpenMenuItems}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default SideBarMenuItems