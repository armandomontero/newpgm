'use client';

import { FormCrearEmpresa } from "@/app/(routes)/empresas/components/FormCrearEmpresa";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { CirclePlus } from "lucide-react";
  import { useState } from "react";

  

 export default function HeaderEmpresas(){
    const [openModalCreate, setOpenModalCreate] = useState(false)
    return (
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Lista de Empresas</h2>

        <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
            <DialogTrigger asChild>
                <Button>Crear Empresa</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Crear Empresa</DialogTitle>
                    <DialogDescription>
                        Crear y registrar empresas
                    </DialogDescription>
                </DialogHeader>
                <FormCrearEmpresa setOpenModalCreate={setOpenModalCreate}/>
            </DialogContent>
        </Dialog>

        </div>
    )
}