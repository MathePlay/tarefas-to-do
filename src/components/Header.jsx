import { Search } from "lucide-react";

export default function Header() {
    return (
        <header className="flex px-7 py-2 h-12 w-full bg-[#1b1a19] border-b border-[#484644] justify-between">
            <div className="w-[8.2rem] flex flex-col items-center">
                <h1 className="font-semibold text-lg leading-none p-0">Minhas Tarefas</h1>
                <span className="font-light text-xs">By: Matheus Doerzbacher</span>
            </div>
            <div className=" w-48 sm:w-72 md:w-96 flex items-center rounded-[4px] bg-[#252423] hover:bg-[#323130]">
                <form action="" className="flex w-full">
                    <button type="submit">
                        <Search size={17} className="mx-2 text-[#55a4f0]" />
                    </button>
                    <input type="text" placeholder="Pesquisar" className="w-full px-2 bg-transparent outline-none" />
                </form>
            </div>
            <div className="hidden sm:flex w-[8.2rem]"></div>
        </header>
    )
}