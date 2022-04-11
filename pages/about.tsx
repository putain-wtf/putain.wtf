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
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 md:mx-0 text-left '>
                        <span>
                        We are a voluntary, multidisciplinary collective of web 3* and art enthusiasts united by the urge to help Ukraine.
                        </span>  
                        <br />
                        <span>
                        Supported and advised by a network of respected specialists in the art and NFT scene, we aim to use the power of the arts to drive change.
                        </span>                
                    </div>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56 '>
                        What we do
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                        Putain is a digital platform showcasing selected artworks by upcoming artists that are auctioned for a good cause.
                        </span>  
                        <br />
                        <br />
                        <span>
                        We offer analogue artworks and NFTs generously donated by artists and art collectors worldwide.
                        </span>              
                    </div>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56 '>
                        To what cause
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                        We aim to raise funds for Ukraine and stand in solidarity with the Ukrainian people. We, therefore, selected several non-profit organisations that we trust and know will act in line with our vision*
                        </span>  
                        <br />
                        <br /> 
                        <ul className="list-disc ml-6">
                            <li>ICRC (International Committee of the red cross)</li>
                            <li>Doctors without borders</li>
                            <li>NOVA Ukraine</li>
                        </ul>
                        <br />
                        <span>
                        To enable donations in both crypto and fiat currencies (specifically via PayPal), we chose to set up a fund at Endaoment.org. 
                        </span>   
                        <br />
                        <br />
                        <span>
                        Endaoment.org* is a tax-exempt public charity that leverages the transparency of blockchain technology to raise funds and disburse these to selected non-profits. Every incoming and outgoing transaction to an Endaoment.org fund is publicly visible and verifiable.
                        </span>
                        <br/>
                        <br/>
                        <span>
                        To verify the credibility of Endaoment.org, we spoke face to face with their COO, Zach Bronstein and contacted several non-profit organisations, including the ICRC. The reactions we got from the receiving organisations were overwhelmingly positive. They also confirmed to have received transactions that are stated as disbursed on Endaoment.org.
                        </span>
                        <br/>
                        <br/>
                        <span>
                        If you miss a wonderful non-profit organisation from our fund or want to decide where your donation goes, please do not hesitate to contact us.
                        </span>
                        <br/>
                        <br/>
                        <span>
                        *You can find information on these non-profits in the further reading section below
                        </span>
                    </div>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56  '>
                        How it works
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                        To raise as many donations as possible, we sell artworks through auctions. The highest bid wins.
                        </span>
                        <br />
                        <br />
                        <span className="font-bold">NFTs—non-fungible tokens</span> 
                        <br />
                        <br />
                        <span>
                        NFTs* offered on our platform are auctioned via foundation.app*, an NFT marketplace.
                        </span>       
                        <br />
                        <br />
                        <span>
                        85% of the proceeds go directly to our partnering humanitarian organisations via Endaoment.org, while Foundation charges 15% for providing the marketplace.
                        </span>          
                        <br />
                        <br />
                        <span>
                        This behaviour is hardcoded in the NFTs during creation, leveraging Foundation splits. Therefore, we can verifiably ensure that money flows directly from the buyer to Endaoment.org without it ever being in our possession.
                        </span>
                        <br />
                        <br />
                        <span className="font-bold">ANALOGUE</span> 
                        <br />
                        <br />
                        <span>
                        Analogue artworks are auctioned directly on Putain. Once the auction ends, the highest bidder is determined and contacted by us. 
                        </span>       
                        <br />
                        <br />
                        <ol className="list-decimal ml-6">
                            <li>The buyer will then be instructed to make a payment to Endaoment.org via PayPal or cryptocurrencies, matching the value of his or her bid.</li>
                            <li>We verify the success of the transaction with Endaoment.org.</li>
                            <li>Once the transaction is confirmed, we calculate shipping costs and set up a payment channel between buyer and artist</li>
                            <li>The artwork is shipped</li>
                        </ol>    
                    </div>
                </div> 
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56  '>
                        Disclaimer
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <span>
                        Putain does not take any responsibility for transactions from buyers that cannot be verified.
                        </span>
                        <br />
                        <br />
                        <span>
                        Unless both parties agree, Putain will not facilitate communication channels between artists and buyers.
                        </span>       
                        <br />
                        <br />
                        <span>
                        Auction prices do not include shipment and art handling. 
                        </span>          
                        <br />
                        <br />
                        <span>
                        Putain does not hand out charitable donation certificates to buyers or artists.
                        </span>
                    </div>
                </div>
                <div className='md:text-right md:flex mt-8 md:space-x-12  '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase md:flex-none px-6 md:w-56  '>
                        Further Reading
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 antialiased leading-6 md:mt-0 px-6 md:px-0 text-left '>
                        <a href="https://www.wired.com/story/web3-gavin-wood-interview/" className="underline">
                        What is web 3?
                        </a>
                        <br />
                        <a href="https://endaoment.org/about" className="underline">
                        About Endaoment
                        </a>
                        <br />
                        <a href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/" className="underline">
                        Non fungible tokens (NFTs) explained
                        </a>
                        <br />
                        <a href="https://foundation.app/collection/putain" className="underline">
                        The putain foundation collection
                        </a>
                        <br />
                        <a href="https://app.endaoment.org/putain" className="underline">
                        The putain endaoment fund
                        </a>
                        <br />
                        <a href="https://www.unicefusa.org/nova-ukraine" className="underline">
                        Nova ukraine and unicef join forces in ukraine conflict
                        </a>
                        <br />
                        <a href="https://time.com/6151353/how-to-help-ukraine-people/" className="underline">
                        Time article about trustworthy non profits that are active in ukraine
                        </a>
                    </div>
                </div>
            </div>
            <SocialBar/>
        </>
    )  
}
export default About;

