import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req:Request, { params }: { params: { empresaId: string } } ){
    try {
        const {userId} = auth();
        const {empresaId} = params;
        const values = await req.json() 
       // console.log(empresaId.);
        //return  false;
        if(!userId){
             return new NextResponse("No autorizado", {status: 401})
        }
        
        
        const empresa = await db.empresa.update({
            where: {
                idEmpresa: params.empresaId,
                userId
            },
            data: {
                ...values,
            }
        })
        //console.log(empresa);
        return NextResponse.json(empresa);
        
    } catch (error) {
        console.log("[EMPRESA]", error);
        return new NextResponse("Error Interno", {status: 500}, )
    }
}

export async function DELETE(req: Request, {params}:{params: {empresaId : string}}) {
    try {
        const {userId} = auth();
        const {empresaId} = params

        if(!userId){
             return new NextResponse("No autorizado", {status: 401})
        }

        const empresaBorrada = await db.empresa.delete({
            where: {
                idEmpresa : empresaId
            }
        })

                return NextResponse.json(empresaBorrada);


    } catch (error) {
        console.log("[DELETE EMPRESA]", error);
        return new NextResponse("Error Interno", {status: 500}, )
    }
}