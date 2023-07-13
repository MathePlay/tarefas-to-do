
export default function SubMenu({ children, nome }) {
    return (
        <button className='flex items-center mt-1 h-9 hover:bg-white/5 rounded group'>
            <div className='h-4 w-0.5 border-2 rounded-full border-select-color bg-select-color invisible group-hover:visible '></div>
            <div className='flex items-center px-2 gap-3'>
                {children}
                <span className='text-sm text-zinc-100'>{nome}</span>
            </div>
        </button>
    )
}