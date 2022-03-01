import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const artistArray = [
    {artist: "Simon Denny", imageurl: "/example-image.jpg", alt: "Simon Denny", title:"a nice nft"},
    {artist: "Paul Kolling", imageurl: "/example-image2.png", alt: "Paul Kolling",title:"a nice nft"},
    {artist: "Beeple", imageurl: "/example-image3.png", alt: "Beeple", title:"a nice nft"},
    {artist: "Sarah Friend", imageurl: "/example-image4.png", alt: "Sarah Friend", title:"a nice nft"},
    {artist: "Gabriela Sabela", imageurl: "/example-image4.png", alt: "Sarah Friend", title:"a nice nft"},
    {artist: "Jonas Lund", imageurl: "/example-image4.png", alt: "Sarah Friend", title:"a nice nft"},


  ]

  return (
    <>
      <NavBar/>
      <div className='md:mx-20 '>
          <div className='font-arial font-black text-sm text-black mx-12 mt-8 md:mt-12 '>
            <div className='mx-auto text-center md:text-left uppercase '>
              we exhibit art nfts.
            </div>
            <div className='mx-auto text-center md:text-left mt-2 md:mt-0.5 uppercase'>
              to Raise Funds for the ukrainian people.
            </div>
        </div>
      
        <div>
          <div className='mx-auto text-center font-times italic font-regular text-lg mt-8 antialiased'>
            featured artists
          </div>
          <div className='flex mx-4'>
                                    {/* build this as a component later */}
            {artistArray.map((artist, index) =>{
              return (
                <button 
                  key={index}
                  className='flex-none uppercase border-[1px] p-1 px-2 rounded-sm border-black m-2 snap-center '>
                  {artist.artist}
                </button>
              )
            })} 
          </div>
          <button className='italic font-times font-normal text-lg underline text-center md:hidden' >
              reset
          </button>
          <div className='text-center mx-4 md:text-left md:flex '>
                                    {/* build this as another component later */}
            {artistArray.map((image, index) => {
              return (
                <div key={index} className="mt-4">
                    <Image src={image.imageurl} alt={image.alt} key={index} width={250} height={200} layout="intrinsic"></Image>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      

    </>
    
  )
}

export default Home
