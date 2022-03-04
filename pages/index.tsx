import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import GalleryCard from '../components/GalleryCard/GalleryCard'
import SocialBar from '../components/SocialBar/SocialBar'
import { useState } from 'react'
import FilterBar from '../components/FilterBar/FilterBar'

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

const Home: NextPage = () => {
	const artistArray = [
		{artist: "Simon Denny", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-1.jpg", imageWidth: 3200, imageHeight: 2400, alt: "Simon Denny", title:"a nice nft"},
		{artist: "Paul Kolling", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-2.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Paul Kolling",title:"a nice nft"},
		{artist: "Beeple", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-3.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Beeple", title:"a nice nft"},
		{artist: "Sarah Friend", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Gabriela Sabela", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Jonas Lund", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Simon Denny", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-1.jpg", imageWidth: 3200, imageHeight: 2400, alt: "Simon Denny", title:"a nice nft"},
		{artist: "Paul Kolling", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-2.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Paul Kolling",title:"a nice nft"},
		{artist: "Beeple", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-3.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Beeple", title:"a nice nft"},
		{artist: "Sarah Friend", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Gabriela Sabela", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Jonas Lund", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
	]
	const [activeArtists, setActiveArtists] = useState<number[]>([])
	const filteredArtists = activeArtists.length === 0 ? artistArray : artistArray.filter((e, i) => activeArtists.includes(i)) 
	const filteredGroupedArtists = chunk(filteredArtists, 2)

	return (
		<>
			<NavBar/>
			<div className='max-w-screen-lg mx-auto md:px-24'>
				<div className='font-arial-black antialiased font-black text-base md:text-lg text-black px-14 md:px-0 mt-20 md:mt-36 '>
					<div className='mx-auto text-center md:text-left uppercase '>
						We showcase selected NFT-artworks
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
											<div key={key} className="mt-4 md:mb-4 px-4 md:px-0 only:max-w-[50%]" style={{flex: image.imageWidth/image.imageHeight}}>
												<GalleryCard imageUrl={image.imageUrl} alt={image.alt} width={image.imageWidth} height={image.imageHeight} marketUrl="" artist={image.artist} description={image.description} />
											</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<SocialBar />
		</>
	)
}

export default Home
