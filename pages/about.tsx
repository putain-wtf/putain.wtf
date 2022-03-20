import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import SocialBar from "../components/SocialBar/SocialBar";
import Head from "next/head";
import { SupabaseClient } from "@supabase/supabase-js";

type AboutProps = {
    supabaseClient: SupabaseClient
}

const About: NextPage<AboutProps> = ({supabaseClient}) => {
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
            <div className=" mx-auto lg:px-30 md:px-20 max-w-lg md:max-w-screen-lg mb-28 ">
                <div className='md:text-right md:flex mt-20 md:space-x-12 '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56 '>
                        Who we are
                    </div>
                    <p className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 md:mx-0 text-left '>
                        <div>
                            We are a voluntary, multidisciplinary collective of web 3 and art enthuasiasts united by the urge to help Ukraine.                        </div>  
                        <br />
                        <span>
                            Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use the power of the arts to drive change.                        
                        </span>                
                    </p>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56 '>
                        What we do
                    </div>
                    <p className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                            Putain.wtf is a digital platform showcasing selected artworks by upcoming artists that are auctioned for a good cause.                        
                        </span>  
                        <br />
                        <br />
                        <span>
                            The artworks offered are NFTs (non fungible tokens) and are donated by the artists. They can be purchased using cryptocurrency (find more information on how that works here).                        
                        </span>
                        <br />
                        <br />
                        <span>
                            Putain.wtf takes care of all technical and financial (legal, tax) aspects that come with auctioning and donating an NFT. By offering a smooth process, we want to encourage artists that have not been active in the NFT space yet, to do so. Our aim is to enable all artists to donate NFTs for a good cause.                        
                        </span>   
                        <br />
                        <br />
                        <span>
                            100% of the proceeds go directly to our partnering humanitarian organisations via endaoment.org.                        
                        </span>                
                    </p>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56 '>
                        Why we do it
                    </div>
                    <p className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                            Needless to say, our aim is to raise funds for Ukraine and stand in solidarity with the Ukrainian people.
                        </span>  
                        <br />
                        <br />
                        <span>
                            We believe that the art market has a large financial lever that now needs to be used in favor of the Ukraine. Whilst we see many NFT projects donating to the Ukraine already, it can be difficult for art lovers that are not active in the crypto space yet to become aware of those. We want to serve as a bridge between the crypto and the art world, which can no longer be viewed separately. Next to our own collaboration with artists, we also share links to existing donation projects.
                        </span>      
                        <br />
                        <br />
                        <span>
                            If you wish to be listed on our platform as an artist or as an existing donation project, please reach out.
                        </span>          
                    </p>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56  '>
                        We Guarantee
                    </div>
                    <p className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                            We do not charge commission fees on purchased artworks. Gas fees are paid by the buyer.
                        </span>  
                        <br />
                        <br />
                        <span>
                            Using the transparency of blockchain technology, we can verify that the donation proceeds are directly transferred to the donation platform endaoment.org from where the funds will be distributed.
                        </span>       
                        <br />
                        <br />
                        <span>
                            NFTs are exclusively listed on putain.wtf.
                        </span>         
                    </p>
                </div> 
            </div>
            <SocialBar/>
        </>
    )  
}
export default About;

