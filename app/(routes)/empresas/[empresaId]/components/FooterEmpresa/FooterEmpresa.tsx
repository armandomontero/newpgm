'use client'

import { useRouter } from "next/navigation";

import axios from 'axios'
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FooterEmpresaProps } from "./FooterEmpresa.types";
import empresas from "../../../page";

export function FooterEmpresa(props: FooterEmpresaProps){

    const {empresaId} = props
    const router = useRouter();

    const onDeleteEmpresa = async()=>{
        if(window.confirm(
                    `¿Estás seguro que deseas eliminar el registro?`
                )){
        try {
            axios.delete(`/api/empresa/${empresaId}`);
            toast("Empresa Eliminada")
            router.push("/empresas")
        } catch (error) {
            toast("Algo salió mal")
        }
    }
}

    return (
        <div className="flex justify-end mt-5">

            <Button variant="destructive" onClick={onDeleteEmpresa}>
                <Trash className="h-4 w-4"/>
                Eliminar Empresa
            </Button>

        </div>
    )
}