import { EmpresaInformacionProps } from "./EmpresaInformacion.types";
import Image from "next/image";
import { User } from "lucide-react";
import { EmpresaFormulario } from "../EmpresaFormulario";
import { NuevoContacto } from "../NuevoContacto";
import { ListaContactos } from "../ListaContactos";



export function EmpresaInformacion(props: EmpresaInformacionProps){
    const {empresa} = props

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-4">
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
                <div>
                    <Image src={empresa.logoEmpresa} alt="Logo" width={50} height={50} className="rounded-lg mb-3"/>

                    <EmpresaFormulario empresa={empresa}/>
                </div>
            </div>
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4 h-min">
                <div className="flex items-center justify-between gap-x-2">
                    <div className="items-center gap-x-2 flex">
                        <User className="h-5 w-5"/>
                        Contactos
                    </div>
                    <div>
                        <NuevoContacto/>
                    </div>
                </div>
               <ListaContactos empresa={empresa}/>
            </div>
        </div>
    )
}