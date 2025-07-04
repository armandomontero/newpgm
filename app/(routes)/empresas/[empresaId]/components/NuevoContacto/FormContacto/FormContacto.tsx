'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import axios from "axios"
import { AxiosError } from "axios"
import {z} from "zod"
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"


import { useParams, useRouter } from "next/navigation"

import { FormContactoProps } from "./FormContacto.types"

import { formSchema } from "./FormContacto.form"

export function FormContacto(props: FormContactoProps){

const {setOpen} = props
const params = useParams<{empresaId: string}>()
const router = useRouter()


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nombreContacto: "",
            fonoContacto: "",
            emailContacto: "",
            

        }
    })

const { isValid } = form.formState;


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
            try {
               const response = await axios.post(`/api/empresa/${params.empresaId}/contacto`, values)
                //console.log(response.data);
                toast('Contacto agregado!');
                router.refresh();
                setOpen(false)
    
            } catch (error: any) {
                if (axios.isAxiosError(error)) {
                    // Es un error de Axios
                    const axiosError = error as AxiosError;
                    toast(axiosError.message);
                    console.error('Error de Axios:', axiosError.message);
                    if (axiosError.response) {
                        // El servidor respondió con un código de estado diferente a 2xx
                        console.error('Datos de la respuesta:', axiosError.response.data);
                        console.error('Código de estado:', axiosError.response.status);
                    } else if (axiosError.request) {
                        // La solicitud fue realizada pero no se recibió respuesta
                        console.error('Solicitud:', axiosError.request);
                    } else {
                        // Algo sucedió al configurar la solicitud que desencadenó un Error
                        console.error('Error:', axiosError.message);
                    }
                } else {
                    // Es un error que no es de Axios
                    console.error('Error desconocido:', error);
                }
            }
        }

return (
     <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-3">

                      <FormField
                        control={form.control}
                        name="nombreContacto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Contacto</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre Contacto" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    

                    <FormField
                        control={form.control}
                        name="fonoContacto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Teléfono" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="emailContacto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej: contacto@mail.cl" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                  
                </div>
                <Button type="submit" disabled={!isValid}>Guardar Contacto</Button>
            </form>
        </Form>
)
}