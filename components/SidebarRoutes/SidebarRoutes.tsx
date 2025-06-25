import { Separator } from "@/components/ui/separator"
import { SidebarItem } from "../SidebarItem"
import { dataGeneralSidebar, dataToolsSidebar, dataSupportSidebar } from "./SidebarRoutes.data"
import { Button } from "@/components/ui/button"

export default function SidebarRoutes() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    <p>GENERAL</p>
                    {dataGeneralSidebar.map((item) => (
                        <SidebarItem key="item.label" item={item} />
                    ))}
                </div>
                <Separator />
                <div className="p-2 md:p-6">
                    <p>SOPORTE</p>
                    {dataSupportSidebar.map((item) => (
                        <SidebarItem key="item.label" item={item} />
                    ))}

                </div>

                <Separator />
                <div className="p-2 md:p-6">
                    <p>HERRAMIENTAS</p>
                    {dataToolsSidebar.map((item) => (
                        <SidebarItem key="item.label" item={item} />
                    ))}

                </div>
            </div>
            <div>
                <div className="text-center p-6">
                        <Button variant="outline" className="w-full">
                            Actualizar Plan
                        </Button>
                </div>
                <Separator/>
                <footer className="p-3 mt-3 text-center">2025. Todos los derechos reservados</footer>
            </div>
        </div>

    )
}