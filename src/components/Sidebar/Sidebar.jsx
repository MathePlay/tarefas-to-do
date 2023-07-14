import { Search, SunMedium, ShoppingCart, Home as HomeIcon, Menu } from 'lucide-react'
import SidebarMenu from './SidebarMenu'
import { useEffect, useState } from 'react'

export default function Sidebar() {
    const [selecionado, setSelecionado] = useState('/')
    const [esconderMenu, setEsconderMenu] = useState(false)

    function hiddenMenu(){
        if(esconderMenu){
            setEsconderMenu(false)
        } else {
            setEsconderMenu(true)
        }
    }

    function selecionar(href){
        setSelecionado(href)
    }

    return (
        <aside className={`flex flex-col sm:py-7 bg-[#252423] h-full ${esconderMenu ? 'w-18' : 'sm:w-48 lg:w-72'}`}>
            <button onClick={hiddenMenu}>
                <Menu size={20} className='ml-6 mb-5 hidden sm:flex'/>
            </button>
            <SidebarMenu 
                nome="Meu Dia" 
                href="/" 
                selecionado={selecionado} 
                esconderMenu={esconderMenu}
                icon={<SunMedium size={20} className='text-zinc-400' />}
                onClick={() => selecionar('/')}
            />
            <SidebarMenu 
                nome="Compras" 
                href="/compras" 
                selecionado={selecionado}
                esconderMenu={esconderMenu}
                icon={<ShoppingCart 
                size={20} 
                className='text-star-color' />} 
                onClick={() => selecionar('/compras')}
            />
            <SidebarMenu 
                nome="Tarefas" 
                href="/tarefas" 
                selecionado={selecionado}
                esconderMenu={esconderMenu}
                icon={<HomeIcon size={20} 
                className='text-home-color' />} 
                onClick={() => selecionar('/tarefas')}
            />
        </aside>
    )
}