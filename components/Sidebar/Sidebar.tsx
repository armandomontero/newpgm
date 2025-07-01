import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { Logo } from "../Logo";

export default function Sidebar() {
    return (
        <div className="h-screen mr-4">
            <div className="h-full flex flex-col border-r ">
                <Logo/>
                <SidebarRoutes/>
            </div>
        </div>
    )
}