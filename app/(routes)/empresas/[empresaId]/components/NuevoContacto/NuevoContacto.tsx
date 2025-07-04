'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FormContacto } from "./FormContacto";

export function NuevoContacto(){

    const [open, setOpen] = useState(false);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Agregar Contacto</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Agregar Nuevo Contacto</DialogTitle>
                    <DialogDescription>
                        Agregar nuevo contacto para utilizarlo más tarde
                    </DialogDescription>
                </DialogHeader>
               <FormContacto setOpen={setOpen}/>
            </DialogContent> 
        </Dialog>
    )
}