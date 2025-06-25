import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo(){
    const router = useRouter();

    return (
        <div className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2" onClick={()=>router.push("/")}>
           <Image src="/logo.png" alt="logo" width={30} height={30} priority/>
           <h1 className="font-bold text-xl">Infoclever</h1>|<h5 className="text-xs">Plataforma de Gestión Médica</h5>
        </div>
    )
}