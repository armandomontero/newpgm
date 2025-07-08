import { Empresa } from "@/lib/generated/prisma"
import { Dispatch, SetStateAction } from "react"
import { boolean } from "zod"

export type FormEventProps = {
    setNewEvent: Dispatch<SetStateAction<{
        eventName: string
        empresaSeleccionada: {name: string, id: string}
    }>>,
    setOpen: Dispatch<SetStateAction<boolean>>,
    empresas: Empresa[],
    setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>
}