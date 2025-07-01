import { ListEmpresas } from "./components/ListEmpresas";
import HeaderEmpresas from "./components/HeaderEmpresa/HeaderEmpresas";

export default function empresas(){
    return (
        <div>
           <HeaderEmpresas/>
            <ListEmpresas/>
        </div>
    )
}