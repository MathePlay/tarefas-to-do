import { Search, SunMedium, ShoppingCart, Home as HomeIcon } from 'lucide-react'
import Image from 'next/image'
import SubMenu from './components/SubMenu'
import BarraAdicionar from './components/BarraAdicionar'
import Tarefa from './components/Tarefa'

export default function Home() {
  return (
    <div className='flex item h-screen w-screen bg-sidebar-color text-zinc-200'>
      <div className='flex itens-center flex-col text-center w-72 p-2'>
        <h1 className='text-2xl mt-1'>Minhas Tarefas</h1>
        <span className='text-xs'>By: Matheus Doerzbacher</span>

        <div className=' mt-4 mb-1 mx-2 h-8 rounded border border-zinc-700  overflow-hidden'>
          <div className='flex h-full border-b border-zinc-400 items-center px-1'>
            <input type="text" placeholder='Search'
              className='bg-sidebar-color text-sm text-zinc-200 w-full placeholder:text-zinc-300 outline-none focus:placeholder:text-zinc-400 pl-2 ' />
            <button className='hover:bg-white/5 px-2 py-1 rounded-md transition-color'>
              <Search size={14} className='text-zinc-200' />
            </button>
          </div>
        </div>

        <SubMenu nome="Meu Dia">
          <SunMedium size={20} className='text-zinc-400' />
        </SubMenu>

        <SubMenu nome="Compras">
          <ShoppingCart size={20} className='text-star-color' />
        </SubMenu>

        <SubMenu nome="Tarefas">
          <HomeIcon size={20} className='text-home-color' />
        </SubMenu>

      </div>








      <div className="flex flex-1 flex-col h-full w-full bg-no-repeat bg-cover bg-center rounded-tl-lg overflow-hidden bg-[url(https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg)]">
        <header className='flex flex-col h-32 w-full justify-end'>
          <h1 className='mt-9 mx-12 text-3xl font-semibold'>Meu Dia</h1>
          <DataAtual className="mx-12 mb-3 text-sm font-light"/>
        </header>

        <div className='flex flex-1 flex-col h-full justify-between px-12' >
          <div className='flex h-full w-full flex-col gap-1' >
            <Tarefa/>
            <Tarefa/>
          </div>
          
          <div className='h-32 w-full ' >
            <BarraAdicionar/>
          </div>
        </div>

      </div>
    </div>
  )
}

function DataAtual({className}: any) {
    
  const dayName = new Array("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
  const monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto", "setembro", "outubro", "novembro", "dezembro")
  const now = new Date

  return (
    <span className={`${className}`}>{`${dayName[now.getDay() ]}, ${now.getDate ()} de ${monName [now.getMonth() ]}`}</span>
  )
}

