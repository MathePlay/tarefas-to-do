"use client"
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function TarefaConcluida({ nome, deletarTarefas, id}) {

    function deletarTarefa() {
        deletarTarefas()
    }

    return (
        <div className='flex items-center mt-2 w-full h-12 bg-[#161615] rounded hover:bg-[#242322]  '>
            <button className='rounded-full ' onClick={deletarTarefa}>
                <div className='h-5 w-5 border-2 rounded-full group mx-4 flex items-center justify-center border-zinc-500' >
                    <Check size={13} className='invisible group-hover:visible pointer-events-none text-zinc-500' />
                </div>
            </button>

            <span className='text-sm text-zinc-500'>{nome}</span>
            <input type="checkbox" className='appearance-none checked:bg-blue-600 checked:border-transparent' />
        </div>
    )
}