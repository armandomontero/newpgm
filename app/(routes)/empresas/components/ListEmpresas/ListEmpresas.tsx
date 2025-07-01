import {redirect} from 'next/navigation'
import { auth } from '@clerk/nextjs'

import { db } from '@/lib/db'
import { DataTable } from './data-table';
import { columns } from './Columns'

export async function ListEmpresas(){

    const {userId} = auth();

    if(!userId){
        return redirect("/");
    }

    const empresas = await db.empresa.findMany({
        where: {
            userId,
        },
        orderBy:{
            createdAt: "desc"
        }
    })
   // console.log(empresas)

    return (
    <DataTable columns={columns} data={empresas}/>
    )
}