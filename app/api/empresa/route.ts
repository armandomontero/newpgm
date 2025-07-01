import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const {userId} = auth();

        const data = await req.json() 

        if(!userId){
             return new NextResponse("No autorizado", {status: 401})
        }
        
        
        const empresa = await db.empresa.create({
            data:{
                userId,
                ...data,
            },
        })
        console.log(empresa);
        return NextResponse.json(empresa);
        
    } catch (error) {
        console.log("[EMPRESA]", error);
        return new NextResponse("Error Interno", {status: 500}, )
    }
}