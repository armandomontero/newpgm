import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";



export async function ListEmpresas(){

    const {userId} = auth(); 

 if(!userId){
             return redirect("/")
        }

        const empresas = await db.empresa.findMany({
            orderBy:{
                createdAt: "desc"
            }
        })

        console.log(empresas);
    return (
        <div>lista
                </div>
               
         
    )
}