import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type GalleryCardProps = {
    imageUrl: string,
    marketUrl: string,
    alt: string,
    width: number,
    height: number,
    artist: string,
    description: string
}

export default function GalleryCard({imageUrl, marketUrl, alt, width, height, artist, description}: GalleryCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative block w-full group">
            <button className="block w-full" onClick={() => setIsOpen(!isOpen)}>
                <Image src={imageUrl} alt={alt} width={width} height={height} layout="responsive"></Image>
            </button>
            <div className={`absolute inset-0 md:top-auto bg-white bg-opacity-70 backdrop-blur-sm p-4 flex-col md:flex-row-reverse items-stretch justify-between md:group-hover:flex ${isOpen ? "flex" : "hidden"}`}>
                <div className="flex items-start justify-between md:items-center">
                    <Link href={marketUrl}>
                        <a className="font-arial antialiased font-bold bg-white text-base text-black flex-none uppercase border-[1px] p-0.5 px-2 border-black">donate</a>
                    </Link>
                    <button onClick={() => setIsOpen(false)} className="md:hidden" > 
                        <div className="w-8 h-8 relative p-2" >
                            <div className="bg-menu-cross bg-no-repeat bg-center bg-contain w-full h-full"></div>  
                        </div>
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="font-arial antialiased font-normal uppercase text-base text-black text-left px-1 mt-auto">{artist}</div>
                    <div className='text-left font-times italic font-regular text-base antialiased px-1 mt-0'>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}