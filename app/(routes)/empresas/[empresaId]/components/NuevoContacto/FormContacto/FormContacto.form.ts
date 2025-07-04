import { z } from "zod"

export const formSchema = z.object({
    
        nombreContacto: z.string().min(2, {
            message: "El nombre del contacto debe contener al menos 2 caracteres.",
        }),
        fonoContacto: z.string().min(2),
        emailContacto: z.string().email("Mail valido"),
        
})