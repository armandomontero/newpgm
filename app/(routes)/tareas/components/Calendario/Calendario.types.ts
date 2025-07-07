import { Empresa } from "@/lib/generated/prisma"
import { Event } from "@/lib/generated/prisma"

export type CalendarioProps = {
    empresas: Empresa[],
    events: Event[]
}