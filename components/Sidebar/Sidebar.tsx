import SidebarRoutes from "../SidebarRoutes/SidebarRoutes";
import { Logo } from "../Logo";

export default function Sidebar() {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col border-r">
                <Logo/>
                <SidebarRoutes/>
            </div>
        </div>
    )
}