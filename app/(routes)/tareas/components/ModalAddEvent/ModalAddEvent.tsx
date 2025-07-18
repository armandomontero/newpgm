'use client'

import { FormEvent } from "../FormEvent";
import { ModalAddEventProps } from "./ModalAddEvent.types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ModalAddEvent(props: ModalAddEventProps){

    const {open, empresas, setNewEvent, setOnSaveNewEvent, setOpen} = props;

    return (
       <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Agregar nuevo evento</DialogTitle>
                </DialogHeader>
                <FormEvent
                 setOpen={setOpen}
                 setOnSaveNewEvent={setOnSaveNewEvent}
                 empresas={empresas}
                 setNewEvent={setNewEvent}
                />
            </DialogContent>
       </Dialog>
    )
}