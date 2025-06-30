import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";

import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { ListIntegrations } from "./components/ListIntegrations";
import { UltimosClientes } from "./components/UltimosClientes";

export default function Home() {
  return (
    <div>


      <h2 className="text-2xl mb-4">Plataforma de Gestión Médica</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={UsersRound}
          total="12.450"
          average={15}
          title='Creacion de Empresa'
          tooltipText="Crear una nueva empresa"
        />

        <CardSummary
          icon={Waypoints}
          total="86.05%"
          average={80}
          title='Total Empresas'
          tooltipText="Ver todos los registros"
        />


        <CardSummary
          icon={BookOpenCheck}
          total="86.05%"
          average={100}
          title='aassa'
          tooltipText="sassa"
        />


      </div>

      <div className=" grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <UltimosClientes/>
        <p>Distribuidores</p>


        <ListIntegrations/>
      </div>

    </div>
  );
}
