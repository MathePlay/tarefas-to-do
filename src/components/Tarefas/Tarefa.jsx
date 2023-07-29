"use client"
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Tarefa({ nome, deletarTarefas, id, concluida}) {

    function deletarTarefa() {
        deletarTarefas()
    }

    return (
        <div className={`
            flex items-center mt-2 w-full min-h-[48px] py-1  rounded 
            ${concluida 
                ? "bg-[#161615] hover:bg-[#242322] text-zinc-500" 
                : "bg-[#252423] hover:bg-[#323130]"
            }
        `}>
            <button className={`rounded-full`} onClick={deletarTarefa}>
                <div className={`h-5 w-5 border-2 rounded-full group mx-4 flex items-center justify-center ${concluida && "border-zinc-500"}`} >
                    <Check size={13} className={`invisible group-hover:visible pointer-events-none `} />
                </div>
            </button>

            <span className={`text-sm`}>{nome}</span>
            <input type="checkbox" className={`appearance-none checked:bg-blue-600 checked:border-transparent`} />
        </div>
    )
}