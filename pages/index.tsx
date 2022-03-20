import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import GalleryCard from '../components/GalleryCard/GalleryCard'
import SocialBar from '../components/SocialBar/SocialBar'
import { useState } from 'react'
import FilterBar from '../components/FilterBar/FilterBar'
import Link from 'next/link'
import Head from 'next/head'
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";

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

const Home: NextPage = ({supabaseClient}) => {
 
  const artistArray = [
		{artist: "Simon Denny", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-1.jpg", imageWidth: 3200, imageHeight: 2400, alt: "Simon Denny", title:"a nice nft"},
		{artist: "Paul Kolling", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-2.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Paul Kolling",title:"a nice nft"},
		{artist: "Beeple", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-3.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Beeple", title:"a nice nft"},
		{artist: "Sarah Friend", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Sabela Garcia", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Jonas Lund", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Simon Denny", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-1.jpg", imageWidth: 3200, imageHeight: 2400, alt: "Simon Denny", title:"a nice nft"},
		{artist: "Paul Kolling", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-2.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Paul Kolling",title:"a nice nft"},
		{artist: "Beeple", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-3.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Beeple", title:"a nice nft"},
		{artist: "Sarah Friend", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Sabela Garcia", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
		{artist: "Jonas Lund", description: "Ein längerer Projekttitel, 2022", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "Sarah Friend", title:"a nice nft"},
	]

	const linkArray = [
        {href:"https://twitter.com/PutainWtf", iconClass:"bg-twitter-black"},
        {href:"", iconClass: "bg-insta-black"},
        {href:"https://discord.com/channels/@me/putain.wtf#8590", iconClass: "bg-discord-black"},
        {href:"https://github.com/putain-wtf", iconClass: "bg-github-black"},
    ]

	const [activeArtists, setActiveArtists] = useState<number[]>([])
	const filteredArtists = activeArtists.length === 0 ? artistArray : artistArray.filter((e, i) => activeArtists.includes(i)) 
	const filteredGroupedArtists = chunk(filteredArtists, 2)
	const withArtists = "With Lisa Strautmann, Karl-Luis Vossbeck, Tüüg,\n Cora Wöllenstein, Monique.Cool, Oska Wald,\n Valentin Wedde, Tigor, Leo Ludwigs, Antonia Reiter,\n Julian Barfknecht, Albrecht-Wilke and more to follow..."
	const comingSoon = "Coming soon - Mon, 21.03.2022"

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
				<div className='h-[80vh] text-center flex flex-col items-center justify-center '>
						<div className='font-arial-black font-black uppercase max-w-[9.375rem] md:max-w-none mx-auto'>
							{comingSoon}
						</div>
						<div className='mt-3 font-times text-lg italic max-w-[15rem] md:max-w-[25rem] md:whitespace-pre-wrap'>
							{withArtists}
						</div>
						<div className='hidden md:flex items-center justify-center mt-3'>
							{linkArray.map((entry, key) => {
								return (
									<Link key={key} href={entry.href}>
										<a className="h-10 md:h-8 w-10 md:w-8 p-1.5">
											<div className={`${entry.iconClass} h-full w-full bg-center bg-contain bg-no-repeat`}>
											</div> 
										</a>
									</Link>
								)
							})}
						</div>
					<div className='md:hidden'>
						<SocialBar/>
					</div>
				</div>
		</>
	)
}

export default Home
