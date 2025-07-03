import {db} from "@/lib/db"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

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
console.log(empresa)
    if(!empresa){
        return redirect("/");
    }

    return (
        <div>Página s</div>
    )
}