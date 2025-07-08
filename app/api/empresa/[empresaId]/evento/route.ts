import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, {params}: {params: {empresaId: string}}) {
    try {
       const {userId} = auth();
        const {empresaId} = params;
        const data = await req.json()

        if(!userId){
             return new NextResponse("No autorizado", {status: 401})
        }

        const empresa = await db.empresa.findUnique({
            where: {
                idEmpresa: params.empresaId
            }
        })

        if(!empresa){
             return new NextResponse("No existe la empresa", {status: 404})
        }

        const evento = await db.event.create({
            data: {
                fkEmpresa: params.empresaId,
                ...data
            }
        })
        return  NextResponse.json(evento);

    } catch (error) {
        console.log("[EVENTO]", error);
        return new NextResponse("Error Interno", {status: 500}, )
    }
}