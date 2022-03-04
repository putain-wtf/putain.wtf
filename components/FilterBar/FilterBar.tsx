type FilterBarProps = {
    entryArray: string[]
    activeEntries: number[]
    setActiveEntries: React.Dispatch<React.SetStateAction<number[]>>
}

function onClick(entry: number, activeEntries: number[], setActiveEntries: React.Dispatch<React.SetStateAction<number[]>>) {
    const array = activeEntries.slice()
    array.includes(entry) ? setActiveEntries(array.filter(e => e !== entry)) : setActiveEntries([...array, entry])
}

export default function FilterBar({entryArray, activeEntries, setActiveEntries} : FilterBarProps) {
    return (
        <div className='flex overflow-scroll no-scrollbar mt-2 text-base md:overflow-hidden md:flex-wrap'>
            {entryArray.map((artist, key) =>{
                return (
                    <button 
                        key={key}
                        className={`flex-none uppercase border-[1px] p-1 px-2 border-black mr-2 first:ml-8 md:first:ml-0 last:mr-8 md:last:mr-0 antialiased font-arial md:my-1 font-normal text-base ${activeEntries.includes(key) ? "text-white bg-black" : "text-black bg-white"}`}
                        onClick={(e) => onClick(key, activeEntries, setActiveEntries)}
                    >
                        {artist}
                    </button>
                )
            })}
        </div>
    )
}