"use client"
import { useEffect, useState } from 'react'
import { Circle, Plus } from 'lucide-react'

export default function BarraAdicionar({ addTarefa }) {
    const [inFocus, setInFocus] = useState('')
    const [tarefa, setTarefa] = useState('')

    function addTarefas(novaTarefa) {
        addTarefa(novaTarefa)
    }

    return (
        <div className='w-full h-12  flex items-center rounded bg-[#252423]' >
            <label id='barra'>
                <button
                    className='px-5 py-3 text-[#55a4f0]'
                    onClick={() => {
                        addTarefas(tarefa),
                            setTarefa("")
                    }}>
                    {!inFocus ? <Plus size={23} className='' /> : <Circle size={23} className='hover:text-[#8ec7ff]' />}
                </button>
            </label>

            <input 
                id='barra'
                type="text"
                placeholder="Adicionar uma tarefa"
                value={tarefa}
                onKeyUp={(e) => {
                    if (e.code === "Enter" || e.code === "NumpadEnter") {
                        addTarefas(tarefa)
                        setTarefa("")
                    }
                }}
                onChange={(i) => {
                    setInFocus(i.target.value),
                        setTarefa(i.target.value)
                }}
                className="w-full h-full pr-2 bg-transparent outline-none placeholder:text-[#55a4f0] focus:placeholder:text-zinc-100"
                autoComplete='off'
            />
        </div>


        // <div className='min-h-1/5 w-full'>
        //     <div className='flex items-center w-full h-12 mt-5 bg-black/50 rounded backdrop-blur-md hover:bg-black/40 '>
        //         <form type="submit" className='flex w-full h-full'>
        //             <input type="text" placeholder="Adicionar uma tarefa" className='w-full bg-white/0 text-sm placeholder:text-zinc-200 text-zinc-200 outline-none focus:placeholder-transparent' />
        //         </form>
        //     </div>
        // </div>
    )
}