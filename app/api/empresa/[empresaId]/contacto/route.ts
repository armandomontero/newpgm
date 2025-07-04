import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request, 
    { params }: { params: { empresaId: string } }
){
    try {
        const {userId} = auth();
        const {empresaId} = params;
        const data = await req.json() 

        if(!userId){
             return new NextResponse("No autorizado", {status: 401})
        }
        
        
        const contacto = await db.contacto.create({
            data:{
                fkEmpresa: params.empresaId,
                ...data,
            },
        })
        console.log(contacto);
        return NextResponse.json(contacto);
        
    } catch (error) {
        console.log("[CONTACTO]", error);
        return new NextResponse("Error Interno", {status: 500}, )
    }
}