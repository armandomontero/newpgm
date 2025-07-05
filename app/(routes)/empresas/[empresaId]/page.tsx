import {db} from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import { Header } from "./components/Header"
import { EmpresaInformacion } from "./components/EmpresaInformacion"
import { EmpresaFormulario } from "./components/EmpresaFormulario"
import { FooterEmpresa } from "./components/FooterEmpresa"

export default async function empresaIdPage({params}: {params: {empresaId: string}}){
    //console.log(`jaja= ${params.empresaId}`)

    //Tomamos userId desde clerk autenticacion
    const {userId} = auth()

    //Si no esta logeado lo mandamos a la home de vuelta
    if(!userId){
        return redirect("/");
    }

    const empresa = await db.empresa.findUnique({
        where: {
            idEmpresa: params.empresaId,
            userId
            
        }
    })
//console.log(empresa)
    if(!empresa){
        return redirect("/");
    }

    return (
        <div>
            <Header/>
           <EmpresaInformacion empresa={empresa}/>
            <FooterEmpresa empresaId={empresa.idEmpresa}/>
        </div>
    )
}