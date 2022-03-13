import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import SocialBar from "../components/SocialBar/SocialBar";
import Image from "next/image";
import Link from "next/link";

const About: NextPage = () => {

    const storiesArray = [
		{title: "How do I create a digital wallet?",href: "/1", description: "Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use ...", imageUrl: "/example-image-1.jpg", imageWidth: 3000, imageHeight: 2000, alt: "How do I create a digital wallet?", number:"01", color: "stories-blue"},
		{title: "How do I create a digital wallet?",href: "/2", description: "Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use ...", imageUrl: "/example-image-2.jpg", imageWidth: 3000, imageHeight: 2000, alt: "How do I create a digital wallet?",number:"02" , color: "stories-green"}, 
		{title: "How do I create a digital wallet?",href: "/3", description: "Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use ...", imageUrl: "/example-image-3.jpg", imageWidth: 3000, imageHeight: 2000, alt: "How do I create a digital wallet?", number:"03", color: "stories-pink"},
		{title: "How do I create a digital wallet?",href: "/4", description: "Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use ...", imageUrl: "/example-image-4.jpg", imageWidth: 3000, imageHeight: 2000, alt: "How do I create a digital wallet?", number:"04", color: "stories-orange"},
    ]

    const title = "Stories."
    const introduction = "Here are the latest news/stories regarding anything in the art as well as digital currency sector."
    return (
        <>
            <NavBar />
            <div className="h-full">
                <div className="mb-20  ">
                    <div className=' max-w-[18.625rem] md:max-w-none text-left md:text-center mt-20 mx-auto font-arial-black font-black text-base md:text-lg uppercase px-2 md:px-6  '>
                        {title}                       
                    </div>
                    <div className=' max-w-[18.625rem] text-left font-times px-2 md:px-6 font-normal italic text-xl antialiased leading-6 md:max-w-lg md:text-center mx-auto mt-4  '>
                        <p >
                            {introduction}
                        </p>               
                    </div>
                    <div className="md:flex mt-6 md:mr-8">
                        <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap max-w-3xl md:space-x-10 space-y-10 mx-auto ">
                            {storiesArray.map((stories,index) => {
                                return (
                                    <Link href={stories.href} key={index}  >
                                        <a className="w-72 h-[19rem] relative md:h-[22rem] md:w-[20.5rem] overflow-hidden md:first:mt-10 md:first:ml-8 hover:opacity-80 transition-opacity duration-500" 
                                        key={index}
                                        target="blank_"
                                        >
                                            <Image src={stories.imageUrl} width={stories.imageWidth} height={stories.imageHeight} alt={stories.alt}/>
                                            <div className="bg-white bg-opacity-80 flex absolute mr-4 justify-center items-center w-14 h-14 rounded-full backdrop-blur-3xl top-0 right-0 mt-4 md:hidden">
                                                    <div className={`font-arial-black font-black text-2xl text-${stories.color}`}>
                                                        {stories.number}
                                                    </div>
                                                </div>
                                            <div className="-mt-4 md:-mt-1.5 relative text-left ">
                                                <Image src={stories.imageUrl} width={stories.imageWidth} height={stories.imageHeight} alt={stories.alt}/>   
                                                <div className={`inset-0 -mt-2 absolute w-full bg-white bg-opacity-80 backdrop-blur-3xl `}>
                                                    <div className="mt-3 md:mt-4 ml-2 w-full top-0 font-arial-black text-sm px-4 mr-12 max-w-[15.625rem] antialiased">
                                                        {stories.title}
                                                    </div>
                                                    <div className="ml-2 mt-1 top-0 font-times italic text-base md:text-base leading-tight font-normal px-4 antialiased max-w-[18.625rem]">
                                                        {stories.description}
                                                    </div>
                                                    <div className="hidden bg-white bg-opacity-80 md:flex absolute mr-3 justify-center items-center w-14 h-14 rounded-full backdrop-blur-3xl top-0 right-0 -translate-y-1/2">
                                                        <div className={`font-arial-black font-black text-2xl text-${stories.color}`}>
                                                            {stories.number}
                                                        </div>
                                                    </div>
                                                </div>
                                        
                                            </div>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>     
                </div>
            </div>
            <SocialBar/>
        </>
    )  
}
export default About;

