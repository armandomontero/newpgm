"use client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Ghost, MoreHorizontal, Pencil } from "lucide-react"

import { Empresa } from "@/lib/generated/prisma"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"
import Image from "next/image"
import { id } from "zod/v4/locales"

export const columns: ColumnDef<Empresa>[] = [
  {
    accessorKey: "logoEmpresa",
    header: "Logo",
    cell: ({ row }) => {
        const image = row.getValue("logoEmpresa")
       
        
      return (
        <div className="px-3">
            <Image  src={typeof image==='string'?image : "/images/empresa-icon.png"} width={20} height={20}
            alt="Image" className="h-auto w-auto" />
        </div>
        
      )
    },
    },

      {
    accessorKey: "nombreEmpresa",
    header: ({ column }) => {
        
      return (
        <Button variant="ghost" onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}>Razón Social 
        <ArrowUpDown className="ml-2 h-4 w-4"/></Button>


      )
    },
    },

    {
    accessorKey: "rutEmpresa",
    header: "RUT"
    },
    {
    accessorKey: "direccionEmpresa",
    header: "Dirección"
    },
      {
    accessorKey: "comunaEmpresa",
    header: "Comuna"
    },
    {
    accessorKey: "regionEmpresa",
    header: "Región"
    },
    {
    accessorKey: "telefonoEmpresa",
    header: "Fono"
    },
    {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
        const id = row.original.idEmpresa
       
        
      return (
       <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="w-8 h-4 p-0">
            <span className="sr-only">Abrir Menu</span>
            <MoreHorizontal className="w-4 h-4"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href={`/empresas/${id}`}>
            <DropdownMenuItem>
              <Pencil className="w-4 h-4 mr-2"/>
              Editar
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
        </DropdownMenu>
        
      )
    },
    }
]