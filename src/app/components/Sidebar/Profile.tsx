export function Profile() {
    return (
        <div className="flex items-center gap-3 py-8">
            <img 
                src="https://i.pinimg.com/736x/9a/a0/bc/9aa0bc99645d66f1949ddefa3f700d0f.jpg" 
                className="w-10 h-10 rounded-full" 
            />

            <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-700">Amanda stone</span>
                <p className="text-sm text-zinc-500">amandastone@gmail.com</p>
            </div>
        </div>
    )
}