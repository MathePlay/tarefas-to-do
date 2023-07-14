import { Check } from 'lucide-react'

export default function Tarefa() {
    return (
        <div className='flex items-center w-full h-14 bg-black/60 rounded backdrop-blur-xl hover:bg-black/50 '>
            <button className='rounded-full'>
                <div className='h-5 w-5 border-2 rounded-full group mx-4 flex items-center justify-center '>
                    <Check size={13} className='invisible group-hover:visible pointer-events-none' />
                </div>
            </button>

            <span>Limpar a casa quinta se não meu amorzinho vai me matar</span>
                <input type="checkbox" className='appearance-none checked:bg-blue-600 checked:border-transparent'/>
        </div>
    )
}