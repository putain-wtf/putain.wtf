import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar/NavBar";
import SocialBar from "../../components/SocialBar/SocialBar";

const First: NextPage = () => {

    const stories = {title: "How do I create a digital wallet?", imageUrl: "/example-image-1.jpg", imageWidth: 3000, imageHeight: 2000, alt: "How do I create a digital wallet?", number:"01"}
    const author = "Benjamin Preiss"
    const date = "15.03.2022"
    const title = "How do i create a digital wallet?"
    const subtitle ="Here are the latest news/stories regarding anything in the art as well as digital currency sector. "
    const imagedescription = "Description of this picture"
    const context = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum pretium pellentesque morbi vitae morbi est. Ipsum lorem aliquet viverra nulla suspendisse. Morbi sit amet faucibus et nam sed massa. Blandit sed tortor urna, facilisis. Viverra est egestas vel faucibus. Aliquam amet dui quis in ut etiam. Enim pellentesque adipiscing vel ultricies senectus. Condimentum diam id purus semper elementum id sed nam."
    const title2 = "How do i create a digital wallet?"
    const context2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum pretium pellentesque morbi vitae morbi est. Ipsum lorem aliquet viverra nulla suspendisse. Morbi sit amet faucibus et nam sed massa. Blandit sed tortor urna, facilisis. Viverra est egestas vel faucibus. Aliquam amet dui quis in ut etiam. Enim pellentesque adipiscing vel ultricies senectus. Condimentum diam id purus semper elementum id sed nam."

    return (
        <>
            <NavBar />
            <div className="h-full">
                <div className="mt-8 mb-20"> 
                    <div className="w-16 h-16 mx-auto relative overflow-hidden rounded-full p-2">
                        <div className="relative w-full h-full">
                            <Image src={stories.imageUrl} width={stories.imageWidth} height={stories.imageHeight} alt={stories.alt} layout="fill" objectFit="contain" objectPosition={"center"}/>
                        </div>
                        <div className="bg-white absolute inset-0 bg-opacity-80 backdrop-blur-lg">
                            <div className={`w-full h-full font-arial-black font-black text-4xl mt-3 text-center text-stories-blue`}>
                                {stories.number}
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center mx-auto mt-6 ">
                        <div className="font-times italic antialiased text-xs px-10">
                            {author + " - " + date}
                        </div>
                        <div className="font-arial-black font-black mt-1 uppercase px-10 max-w-sm md:max-w-lg mx-auto ">
                            {stories.title}
                        </div>
                        <div className="font-times italic max-w-sm mx-auto px-10 leading-tight mt-4 md:max-w-lg"> 
                            {subtitle}
                        </div>
                        <div className="mt-8 relative w-full md:min-w-[31.25rem] md:max-w-[40rem] md:w-2/3 h-60 mx-auto">
                            <Image src={stories.imageUrl} width={stories.imageWidth} height={stories.imageHeight} alt={stories.alt} layout="fill" objectFit="cover"/>
                        </div>
                        <figcaption className="font-times font-regular italic mt-2 text-sm">
                            {imagedescription}
                        </figcaption>
                        <div className="mx-auto max-w-lg antialiased">
                            <div className="font-arial-black text-left text-sm font-black mt-8 uppercase px-10 ">
                                {title}
                            </div>
                            <div className="mt-2 px-10 mx-auto font-times font-normal italic text-left leading-tight ">
                                {context}
                            </div>
                            <div className="font-arial-black text-left text-sm font-black mt-8 uppercase px-10 ">
                                {title2}
                            </div>
                            <div className="mt-2 px-10 mx-auto font-times font-normal italic text-left leading-tight ">
                                {context2}
                            </div>
                        </div>   
                    </div> 
                </div>    
            </div>
            <SocialBar/>
        </>
    )  
}
export default First;

