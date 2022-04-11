import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import GalleryCard from '../components/GalleryCard/GalleryCard'
import SocialBar from '../components/SocialBar/SocialBar'
import { useState } from 'react'
import FilterBar from '../components/FilterBar/FilterBar'
import Head from 'next/head'
import { SupabaseClient } from "@supabase/supabase-js";
import { getArtists, getArtworks } from '../util/supabaseFetching'
import { useQuery } from 'react-query'

type IndexProps = {
	supabaseClient: SupabaseClient
}

function chunk (items: {artist: string, description: string, imgUrl: string, width: number, height: number, alt:string, title:string, startPrice:string, currency:string, startDate:string, isNft: boolean, link: string }[] | undefined, size:number, ) {  
  	const chunks = []
	items = items ? [...items] : []
  
	while (items.length) {
	  chunks.push(
		items.splice(0, size)
	  )
	}

	return chunks
}

function Content({supabaseClient}: {supabaseClient: SupabaseClient}) {
	const artworks = useQuery('artworks', () => getArtworks({supabaseClient}))
	const artists = useQuery('artists', () => getArtists({supabaseClient}))
	const [activeArtists, setActiveArtists] = useState<number[]>([])
	if(artworks.isLoading || artists.isLoading) {
		return (
			<div className='max-w-screen-lg mx-auto md:px-24'>
				<div className='font-arial-black antialiased font-black text-base md:text-lg text-black px-14 md:px-0 mt-20 md:mt-36 '>
					<div className='mx-auto text-center md:text-left uppercase '>
						Gallery loading...
					</div>
				</div>
			</div>
		)
	} else if(artworks.isError || artists.isError) {
		return (
			<div className='max-w-screen-lg mx-auto md:px-24'>
				<div className='font-arial-black antialiased font-black text-base md:text-lg text-black px-14 md:px-0 mt-20 md:mt-36 '>
					<div className='mx-auto text-center md:text-left uppercase '>
						Error while loading Gallery
					</div>
				</div>
			</div>
		)
	} else {
		const filteredArtworks = activeArtists.length === 0 ? artworks.data : artworks.data?.filter((e, i) => activeArtists.includes(i))
		const filteredGroupedArtworks = chunk(filteredArtworks, 2)
		return (
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
					<FilterBar entryArray={artists.data?.map(e => e.name)} activeEntries={activeArtists} setActiveEntries={setActiveArtists} />
					<div className='w-full mt-1 flex justify-center md:hidden'>
						<button className='italic font-times font-normal text-xl decoration-1 underline-offset-1 underline text-center px-2' onClick={e => setActiveArtists([])} >
							reset
						</button>
					</div>
					<div className='text-center md:text-left md:flex flex-col mt-8 mb-10'>
						{filteredGroupedArtworks.map((doubleImage, key) => {
							return (
								<div key={key} className="flex flex-col md:flex-row flex-nowrap md:space-x-8">
									{doubleImage.map((image, key) => {
										return (
											<div key={key} className="mt-8 md:mb-8 px-4 md:px-0 md:only:max-w-[50%]" style={{flex: image.width/image.height}}>
												<GalleryCard 
													imageUrl={image.imgUrl} 
													alt={image.alt} 
													width={image.width} 
													height={image.height} 
													marketUrl={image.link} 
													artist={artists.data?.find(e => e.id === image.artist).name} 
													title={image.title} 
													isNft={image.isNft} 
													startPrice={image.startPrice} 
													currency={image.currency} 
													startDate={image.startDate} 
												/>
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
		)
	}
}

const Home: NextPage<IndexProps> = ({supabaseClient}) => {

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
			<Content supabaseClient={supabaseClient} />
		</>
	)
}

export default Home
