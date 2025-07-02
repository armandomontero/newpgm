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

export const columns: ColumnDef<Empresa>[] = [
  {
    accessorKey: "logoEmpresa",
    header: "logoEmpresa",
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
    }
]