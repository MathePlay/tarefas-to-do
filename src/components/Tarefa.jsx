"use client"
import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Tarefa({ nome }) {

    return (
        <div className='flex items-center mt-2 w-full h-12 bg-[#252423] rounded hover:bg-[#323130]  '>
            <button className='rounded-full'>
                <div className='h-5 w-5 border-2 rounded-full group mx-4 flex items-center justify-center '>
                    <Check size={13} className='invisible group-hover:visible pointer-events-none' />
                </div>
            </button>

            <span className='text-sm'>{nome}</span>
            <input type="checkbox" className='appearance-none checked:bg-blue-600 checked:border-transparent' />
        </div>
    )
}