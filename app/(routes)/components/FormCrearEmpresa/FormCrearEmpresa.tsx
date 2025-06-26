"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { FormCrearEmpresaProps } from "./FormCrearEmpresa.types"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

  import { validateRut } from '@fdograph/rut-utilities';
import { UploadButton } from "@/utils/uploadthing";

import { toast } from "sonner";


  const isValidRut = (rut: string): boolean => {
    return isValidRut(rut);
  };
const formSchema = z.object({
    rutEmpresa : z.string().refine(validateRut, {
        message: 'RUT inválido',
      }),
    nombreEmpresa: z.string().min(2, {
        message: "El nombre de la empresa debe contener al menos 2 caracteres.",
    }),
    direccionEmpresa: z.string().min(2),
    regionEmpresa: z.string(),
    comunaEmpresa: z.number(),
    telefono: z.string().min(6),
    logoEmpresa: z.string(),
})

export function FormCrearEmpresa(props: FormCrearEmpresaProps) {

    const { setOpenModalCreate } = props;
    const [photoUploaded, setPhotouploaded] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            rutEmpresa: "",
            nombreEmpresa: "",
            direccionEmpresa: "",
            regionEmpresa: "0",
            comunaEmpresa: 0,
            telefono: "",
            logoEmpresa: ""
        },
    })

    const { isValid } = form.formState;

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        console.log(values)
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
                                        <SelectValue placeholder="Selecciona Region"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="0">Región Metropolitana</SelectItem>
                                    <SelectItem value="1">Región del Bio bio</SelectItem>
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
                                    <Input placeholder="Ej. Calle, número, oficina" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

<FormField
                        control={form.control}
                        name="telefono"
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
                        name="logoEmpresa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Logo</FormLabel>
                                <FormControl>
                                    {photoUploaded?(
                                        <p className="text-sn">Imagen Subida</p>
                                    ):(
                                
                                    <UploadButton className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                                    endpoint="logoEmpresa"
                                    onClientUploadComplete={(res)=>{
                                        form.setValue("logoEmpresa", res?.[0].url)
                                        setPhotouploaded(true)
                                    }}
                                    onUploadError={(error:Error)=>{
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
                </div>
                <Button type="submit">Guardar</Button>
            </form>
        </Form>
    )

}