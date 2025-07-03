import { z } from "zod"
import { validateRut } from '@fdograph/rut-utilities';

export const formSchema = z.object({
    rutEmpresa: z.string().refine(validateRut, {
            message: 'RUT inválido',
        }),
        nombreEmpresa: z.string().min(2, {
            message: "El nombre de la empresa debe contener al menos 2 caracteres.",
        }),
        direccionEmpresa: z.string().min(2),
        regionEmpresa: z.string(),
        comunaEmpresa: z.string(),
        telefonoEmpresa: z.string().min(6),
        logoEmpresa: z.string(),
        superUserNick: z.string().min(4, {
            message: "El nombre de usuario debe contener al menos 4 caracteres.",
        }),
        superUserPass: z.string().min(4, {
            message: "La clave de usuario debe contener al menos 4 caracteres",
        }),
        descripcionEmpresa: z.string(),

})