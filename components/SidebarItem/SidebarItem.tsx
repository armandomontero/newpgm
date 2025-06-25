import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarItem(props: SidebarItemProps){
    const {item} = props;
    const {href, icon:Icon, label} = item;
    const pathname = usePathname();
    const activePath = pathname===href;

return (
   <Link href={href} className=
   {cn('flex gap-x-2 nt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg  cursor-pointer',
   activePath && 'bg-slate-400/20')
}
   >
  
  <Icon strokeWidth={1} className='w-5 h-5'/>
  {label}
    </Link>
)
}