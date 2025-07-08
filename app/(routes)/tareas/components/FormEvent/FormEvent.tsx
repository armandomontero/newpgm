'use client'

import { FormEventProps } from "./FormEvent.types";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function FormEvent(props: FormEventProps) {

    const { empresas, setNewEvent, setOnSaveNewEvent, setOpen } = props;
    const [empresaSeleccionada, setEmpresaSeleccionada] = useState({
        name: "",
        id: ""
    });

    const formSchema = z.object({

        eventName: z.string().min(2, {
            message: "El nombre del evento debe contener al menos 2 caracteres.",
        }),
        empresaSeleccionada: z.object({
            name: z.string(),
            id: z.string()
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventName: "",
            empresaSeleccionada: {
                name: "",
                id: ""
            }

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setNewEvent(values)
        setOpen(false)
        setOnSaveNewEvent(true)
    }


    const handleEmpresaChange = (newValue: string) => {
        const empresaSeleccionada = empresas.find(empresa => empresa.nombreEmpresa === newValue);
        if (empresaSeleccionada) {
            setEmpresaSeleccionada({
                name: empresaSeleccionada.nombreEmpresa,
                id: empresaSeleccionada.idEmpresa
            })
            form.setValue("empresaSeleccionada.name", empresaSeleccionada.nombreEmpresa);
        form.setValue("empresaSeleccionada.id", empresaSeleccionada.idEmpresa);
        }
        

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="eventName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre Evento</FormLabel>
                            <FormControl>
                                <Input placeholder="Nombre Evento" type="text" {...field} />
                            </FormControl>
                            <FormDescription>
                                Este es el nombre del evento
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="empresaSeleccionada.name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <Select onValueChange={(newValue)=>{
                                field.onChange(newValue)
                                handleEmpresaChange(newValue)
                            }}
                            defaultValue={field.value}
                                                            >

                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona Empresa" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                   {empresas.map((empresa)=>(
                                    <SelectItem key={empresa.idEmpresa} value={empresa.nombreEmpresa}>
                                        {empresa.nombreEmpresa}
                                    </SelectItem>
                                   ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Crear Evento</Button>
            </form>
        </Form>
    )
}