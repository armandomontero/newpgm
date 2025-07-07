import { Empresa } from "@/lib/generated/prisma"
import { Dispatch, SetStateAction } from "react"

export type ModalAddEventProps = {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setOnSaveNewEvent: Dispatch<SetStateAction<boolean>>,
    empresas: Empresa[],
    setNewEvent: Dispatch<SetStateAction<{
        eventName: string
        empresaSeleccionada: {name: string, id: string}
    }>>
}