import { redirect } from "next/navigation";

import { db } from "@/lib/db"

import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { ListaContactosProps } from "./ListaContactos.types";
import { auth } from "@clerk/nextjs";


export async function ListaContactos(props: ListaContactosProps) {

    const { empresa } = props

    const { userId } = auth();

    if (!userId) {
        return redirect('/')
    }

    const contactos = await db.contacto.findMany(
        {
            where: {
                fkEmpresa: empresa.idEmpresa
            }
        }
    )

    if(contactos.length===0){
        return (
            <p>No hay registros</p>
        )
    }

    return (
        <div >
            <div className="mt-4 mb-2 grid grid-cols-3 p-2 gap-x-3 items-center justify-between px-4 bg-slate-400/20 rounded-lg">
                <p>Nombre</p>
                  <p>Fono</p>
                <p className="text-right">Mail</p>
            </div>

            {contactos.map((contacto=>(
                <div key={contacto.idContacto} className="text-sm">
                    <div className="grid grid-cols-3 items-center justify-between px-4">
                        <p>{contacto.nombreContacto}</p>
                     <a href={`telto:${contacto.fonoContacto}`} target="_blank">
                        {contacto.fonoContacto}</a>
                    <div className="flex items-center justify-end gap-x-6">
                        
                        <a href={`mailto:${contacto.emailContacto}`} target="_blank">
                       {contacto.emailContacto}</a>
                    </div>
                </div>
                <Separator className="my-3"/>
                 </div>
            )))}
        </div>
    )
}