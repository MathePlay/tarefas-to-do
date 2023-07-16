"use client"

import { useEffect, useState } from 'react'
import { Circle, Plus } from 'lucide-react'

export default function BarraAdicionar({AddTarefa}) {

    const [inFocus, setInFocus] = useState('')
    const [tarefa, setTarefa] = useState('')

    function AdicionarTarefa(e){
        AddTarefa(tarefa)
        console.log(tarefa)
    }

    

    return (
        <form 
            onSubmit={AdicionarTarefa}
            action="" 
            className=' flex w-full h-12 items-center rounded bg-[#252423] '>
            <button className='px-5 py-3 text-[#55a4f0] '>
                {!inFocus ? <Plus size={23} className=''/> : <Circle size={23} className=''/>}
            </button>
            <input type="text" placeholder="Adicionar uma tarefa" value={tarefa} onChange={(i) => {
                setInFocus(i.target.value)
                setTarefa(i.target.value)
            }}
                className="w-full h-full pr-2 bg-transparent outline-none placeholder:text-[#55a4f0] focus:placeholder:text-zinc-100 " 
            />
        </form>


        // <div className='min-h-1/5 w-full'>
        //     <div className='flex items-center w-full h-12 mt-5 bg-black/50 rounded backdrop-blur-md hover:bg-black/40 '>
        //         <form type="submit" className='flex w-full h-full'>
        //             <input type="text" placeholder="Adicionar uma tarefa" className='w-full bg-white/0 text-sm placeholder:text-zinc-200 text-zinc-200 outline-none focus:placeholder-transparent' />
        //         </form>
        //     </div>
        // </div>
    )
}