import BarraAdicionar from "@/components/BarraAdicionar"
import HeaderMain from "../../components/HeaderMain"
import { ShoppingCart } from "lucide-react"

export default function Compras() {
    return (
        <>
            <HeaderMain nome="Compras">
                <ShoppingCart/>
            </HeaderMain>
            <BarraAdicionar/>
        </>
    )
}