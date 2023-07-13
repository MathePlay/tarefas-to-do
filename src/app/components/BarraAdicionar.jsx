import { Plus } from 'lucide-react'

export default function BarraAdicionar() {
    return (
        <div className='flex items-center w-full h-12 bg-black/50 rounded backdrop-blur-md hover:bg-black/40 '>
            <form type="submit" className='flex w-full h-full'>
                <button className='px-3'>
                    <Plus size={23} />
                </button>
                <input type="text" placeholder="Adicionar uma tarefa" className='w-full bg-white/0 text-sm placeholder:text-zinc-200 text-zinc-200 outline-none focus:placeholder-transparent' />
            </form>
        </div>
    )
}