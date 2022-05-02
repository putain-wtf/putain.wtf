import Image from "next/image"
import { useState } from "react"

type GalleryCardProps = {
    imageUrl: string,
    marketUrl: string,
    alt: string,
    width: number,
    height: number,
    artist: string,
    title: string,
    isNft: boolean,
    startPrice: string,
    currency: string,
    startDate: string,
}

export default function GalleryCard({imageUrl, marketUrl, alt, width, height, artist, title, isNft, startPrice, currency, startDate}: GalleryCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    const startD = new Date(startDate)
    const startDString = startDate ? "Auction starts " + startD.toLocaleString('en-EN', {timeZoneName: "short", month: "2-digit", day: "2-digit", year: "numeric", hour: "2-digit"}) : "Auctions starting soon"
    return (
        <div className="relative block w-full group">
            <div className="relative block w-full">
                <Image src={imageUrl} alt={alt} width={width} height={height} layout="responsive"></Image>
                {
                    //<Link href={marketUrl}>
                        //<a className="absolute bottom-4 right-4 font-arial antialiased font-bold bg-white text-base text-black flex-none uppercase border-[1px] p-0.5 px-2 border-black">donate</a>
                    //</Link>
                }
            </div>
            <div className="p-3">
                <div className="flex items-center justify-start space-x-4">
                    <div className="text-left font-arial antialiased font-black uppercase">{artist}</div>
                    {isNft ? <div className="text-center font-arial antialiased font-bold uppercase border-[1px] border-black text-xs px-1 leading-tight">NFT</div> : null}
                </div>
                <div className="text-left font-times antialiased italic font-normal">{title}</div>
                <div className="text-left font-arial font-bold antialiased text-sm mt-1">{startPrice + " " + currency}</div>
                <div className="text-left font-arial font-normal antialiased text-xs mt-3 uppercase">{startDString}</div>
            </div>
        </div>
    )
}