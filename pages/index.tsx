import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import GalleryCard from '../components/GalleryCard/GalleryCard'
import SocialBar from '../components/SocialBar/SocialBar'
import { useState } from 'react'
import FilterBar from '../components/FilterBar/FilterBar'
import Link from 'next/link'
import Head from 'next/head'
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

type IndexProps = {
	supabaseClient: SupabaseClient
}

function chunk (items: {artist: string, description: string, imageUrl: string, imageWidth: number, imageHeight: number, alt:string, title:string}[], size:number) {  
  const chunks = []
	items = [...items]
  
	while (items.length) {
	  chunks.push(
		items.splice(0, size)
	  )
	}

	return chunks
}

const Home: NextPage<IndexProps> = ({supabaseClient}) => {
 
  const artistArray = [
		{artist: "KARL-LUIS VOSSBERG", description: "Still, 2022\n135 x 110 cm\nacrylics- and graphite on canvas", imageUrl: "/putainwtf_kalu.jpg", imageWidth: 2234, imageHeight: 2779, alt: "Still, 2022\n135 x 110 cm\nacrylics- and graphite on canvas", title:"Still, 2022", isNft: false, price: "1,000.00 €", startDate: "auction starts 25.03.2022"},
		{artist: "TIGOR", description: "ANIMALITY, 2019\nby Tim Schmid & Igor Shuklin\n80.5 x 100.5 cm\noil on canvas", imageUrl: "/TiGor-ANIMALITY.jpg", imageWidth: 3123, imageHeight: 3929, alt: "ANIMALITY, 2019\nby Tim Schmid & Igor Shuklin\n80.5 x 100.5 cm\noil on canvas", title:"ANIMALITY, 2019", isNft: false, price: "100.00 €", startDate: "auction starts 25.03.2022"},
		{artist: "JULIAN B.", description: "Motivational Quote, 2021\n17 x 26 x 9 cm\nglazed stoneware", imageUrl: "/61995D7E-64BA-4B2A-AB75-DAA07D478644.jpeg", imageWidth: 3024, imageHeight: 4032, alt: "Motivational Quote, 2021\n17 x 26 x 9 cm\nglazed stoneware", title:"Motivational Quote, 2021", isNft: false, price: "100.00 €", startDate: "auction starts 25.03.2022"},
		{artist: "ALBRECHT | WILKE", description: "Abstraktes Wurstbild Nr.12, 2021 \nfrom “Eine moderne Wurstserie”\m31,9 x 24 cm\nacrylic- and watercolour paint on paper, backside signed", imageUrl: "/Wurst8.png", imageWidth: 2499, imageHeight: 3284, alt: "Abstraktes Wurstbild Nr.12, 2021 \nfrom “Eine moderne Wurstserie”\m31,9 x 24 cm\nacrylic- and watercolour paint on paper, backside signed", title:"Abstraktes Wurstbild Nr.12, 2021", isNft: false, price: "500.00 €", startDate: "auction starts 25.03.2022"},
	]

	const [activeArtists, setActiveArtists] = useState<number[]>([])
	const filteredArtists = activeArtists.length === 0 ? artistArray : artistArray.filter((e, i) => activeArtists.includes(i)) 
	const filteredGroupedArtists = chunk(filteredArtists, 2)

	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#ffffff"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>
			<NavBar supabaseClient={supabaseClient} />
			<div className='max-w-screen-lg mx-auto md:px-24'>
				<div className='font-arial-black antialiased font-black text-base md:text-lg text-black px-14 md:px-0 mt-20 md:mt-36 '>
					<div className='mx-auto text-center md:text-left uppercase '>
						We showcase selected artworks
					</div>
					<div className='mx-auto text-center md:text-left mt-2 md:mt-0.5 uppercase'>
						to Raise Funds for the ukrainian people.
					</div>
				</div>
				<div>
					<div className='flex mt-12 md:ml-4 md:mb-1'>
						<div className='mx-auto md:mx-0 text-center md:text-left font-times italic font-regular text-lg antialiased md:border-r-[1px] md:leading-none border-black md:pr-3'>
							featured artists
						</div>
						<div className='justify-center hidden md:flex md:pl-1'>
							<button className='italic font-times font-normal text-lg md:leading-none decoration-1 underline-offset-1 underline text-center px-2' onClick={e => setActiveArtists([])} >
								reset
							</button>
						</div>
					</div>
					<FilterBar entryArray={artistArray.map(e => e.artist)} activeEntries={activeArtists} setActiveEntries={setActiveArtists} />
					<div className='w-full mt-1 flex justify-center md:hidden'>
						<button className='italic font-times font-normal text-xl decoration-1 underline-offset-1 underline text-center px-2' onClick={e => setActiveArtists([])} >
							reset
						</button>
					</div>
					<div className='text-center md:text-left md:flex flex-col mt-8 mb-10'>
						{filteredGroupedArtists.map((doubleImage, key) => {
							return (
								<div key={key} className="flex flex-col md:flex-row flex-nowrap md:space-x-8">
									{doubleImage.map((image, key) => {
										return (
											<div key={key} className="mt-8 md:mb-8 px-4 md:px-0 md:only:max-w-[50%]" style={{flex: image.imageWidth/image.imageHeight}}>
												<GalleryCard imageUrl={image.imageUrl} alt={image.alt} width={image.imageWidth} height={image.imageHeight} marketUrl="" artist={image.artist} title={image.title} isNft={image.isNft} price={image.price} startDate={image.startDate} />
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
				<SocialBar />
			</div>
		</>
	)
}

export default Home
