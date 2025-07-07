import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import { db } from "@/lib/db"

import { Calendar } from "@/components/ui/calendar"

import { Calendario } from "./components/Calendario"

export  default async function tareas(){

const {userId} = auth()

if(!userId){
    redirect('/');
}

const empresas = await db.empresa.findMany({
    where: {
        userId
    },
    orderBy: {
        createdAt: "desc"
    }
})

const events = await db.event.findMany({
    
    orderBy: {
        createdAt: "desc"
    }
})

    return (
        <div>
           <Calendario empresas={empresas} events= {events}/>
        </div>
    )
}