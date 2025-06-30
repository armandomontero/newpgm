import { CustomIcon } from "@/components/Customicon";
import { Building } from "lucide-react";
import { ClientesTabla } from "../ClientesTabla";

export function UltimosClientes(){
    
    return (
    <div className="shadow-sm bg-background rounded-lg p-5">
        <div className="flex gap-x-2 items-center">
            <CustomIcon icon = {Building} />
            <p className="text-xl">Últimos Clientes</p>
        </div>

        <div>
            <ClientesTabla/>
        </div>
    </div>
    )
}