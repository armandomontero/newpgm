import {
    BarChart4,
    Building2,
    PanelsTopLeft,
    Settings,
    ShieldCheck,
    CircleHelpIcon,
    Calendar
} from 'lucide-react';

export const dataGeneralSidebar = [
    {
        icon: PanelsTopLeft,
        label: "Dashboard",
        href :"/"
    },
    {
        icon: Building2,
        label: "Empresas",
        href: "/empresas"
    },
    {
        icon: Calendar,
        label: "Calendario",
        href: "/tareas"
    }
]

export const dataToolsSidebar = [
    {
        icon: CircleHelpIcon,
        label: "Faqs",
        href :"/faqs"
    },
    {
        icon: BarChart4,
        label: "Indicadores",
        href: "/indicadores"
    }
]

export const dataSupportSidebar = [
    {
        icon: Settings,
        label: "Ajustes",
        href :"/ajustes"
    },
    {
        icon: ShieldCheck,
        label: "Seguridad",
        href: "/seguridad"
    }
]