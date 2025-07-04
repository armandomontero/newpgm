'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import axios, { Axios, AxiosError } from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { EmpresaFormularioProps } from "./EmpresaFormulario.types"
import { Textarea } from "@/components/ui/textarea"
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { UploadButton } from "@/utils/uploadthing"
import { formSchema } from "./EmpresaFormulario.form"

export function EmpresaFormulario(props: EmpresaFormularioProps) {
    const { empresa } = props
    const router = useRouter()
    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rutEmpresa: empresa.rutEmpresa,
            nombreEmpresa: empresa.nombreEmpresa,
            direccionEmpresa: empresa.direccionEmpresa,
            regionEmpresa: empresa.regionEmpresa,
            comunaEmpresa: empresa.comunaEmpresa,
            telefonoEmpresa: empresa.telefonoEmpresa,
            logoEmpresa: empresa.logoEmpresa,
            superUserNick: empresa.superUserNick,
            superUserPass: empresa.superUserPass,
            descripcionEmpresa: empresa.descripcionEmpresa,

        }
    })

    const { isValid } = form.formState;

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        try {
            const response = await axios.patch(`/api/empresa/${empresa.idEmpresa}`, values)
            //console.log(response.data);
            toast('Empresa Actualizada!');
            router.refresh();

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
                        name="rutEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>RUT</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. 76.125.748-K" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nombreEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Empresa</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre Empresa" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="direccionEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dirección Empresa</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. Calle, número, oficina" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="regionEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Region</FormLabel>
                                <Select onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >

                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona Region" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</SelectItem>
                                        <SelectItem value="Región de Arica y Parinacota">Región de Arica y Parinacota</SelectItem>
                                        <SelectItem value="Región de Antofagasta">Región de Antofagasta</SelectItem>
                                        <SelectItem value="Región de Atacama">Región de Atacama</SelectItem>
                                        <SelectItem value="Región de Coquimbo">Región de Coquimbo</SelectItem>
                                        <SelectItem value="Región de Valparaíso">Región de Valparaíso</SelectItem>
                                        <SelectItem value="Región del Libertador General Bernardo O'Higgins">Región del Libertador General Bernardo O'Higgins</SelectItem>
                                        <SelectItem value="Región del Maule">Región del Maule</SelectItem>
                                        <SelectItem value="Región de Ñuble">Región de Ñuble</SelectItem>
                                        <SelectItem value="Región del Biobío">Región del Biobío</SelectItem>
                                        <SelectItem value="Región de la Araucanía">Región de la Araucanía</SelectItem>
                                        <SelectItem value="Región de Los Ríos">Región de Los Ríos</SelectItem>
                                        <SelectItem value="Región de Los Lagos">Región de Los Lagos</SelectItem>
                                        <SelectItem value="Región de Aysén">Región de Aysén</SelectItem>
                                        <SelectItem value="Región de Magallanes y la Antártica Chilena">Región de Magallanes y la Antártica Chilena</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="comunaEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Comuna</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. Santiago" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="telefonoEmpresa"
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
                        name="superUserNick"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Usuario (Nickname)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nickname" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="superUserPass"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <FormField control={form.control}
                        name="logoEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    {photoUploaded ? (
                                        <p className="text-sn">Imagen Subida</p>
                                    ) : (

                                        <UploadButton className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                                            endpoint="logoEmpresa"
                                            onClientUploadComplete={(res) => {
                                                form.setValue("logoEmpresa", res?.[0].url)
                                                toast("Imagen subida con éxtito!");
                                                setPhotoUploaded(true)
                                            }}
                                            onUploadError={(error: Error) => {
                                                toast("Error subiendo imagen")
                                            }}

                                        />


                                    )
                                    }
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="descripcionEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Descripción</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Descripción..."
                                        {...field}
                                        value={form.getValues().descripcionEmpresa ?? ''}
                                    ></Textarea>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" disabled={!isValid}>Guardar Cambios</Button>
            </form>
        </Form>

    )
}