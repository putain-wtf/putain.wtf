import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import SocialBar from "../components/SocialBar/SocialBar";
import Head from "next/head";
import { SupabaseClient } from "@supabase/supabase-js";

type ContactProps = {
    supabaseClient: SupabaseClient
}

const Contact: NextPage<ContactProps> = ({supabaseClient}) => {
    const inputErrorClasses = (isError: boolean) => isError ? "" : ""
    const inputClasses = " bg-white w-full py-1.5 md:py-1.5 px-2 mt-2 text-left focus:outline focus:outline-4 outline-transparent focus:outline-black/20 border-black font-arial placeholder:uppercase px-4 font-normal text-light-gray antialiased border-[1px] "

    const linkArray = [
        {href:"https://twitter.com/PutainWtf", iconClass:"bg-twitter-black"},
        {href:"", iconClass: "bg-insta-black"},
        {href:"https://discord.com/channels/@me/putain.wtf#8590", iconClass: "bg-discord-black"},
        {href:"https://github.com/putain-wtf", iconClass: "bg-github-black"},
    ]
    
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
            <div className=" mx-auto md:px-40 max-w-lg md:max-w-screen-lg h-[80vh] flex flex-col items-center ">
                <div className='text-center md:flex md:space-x-16 mt-52 '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase'>
                        contact
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className='font-times font-normal italic text-xl mt-2 px-6 antialiased leading-6 md:mt-0 md:text-left'>
                            You want to get involved or have a question about the project? Please don’t hesitate to drop us a message. We’ll get back as soon as we can.
                            <div className="mt-4 md:mt-8">
                                <a className="text-white bg-black px-14 md:px-24 md:py-1.5 text-sm  font-arial not-italic font-bold antialiased py-1 "
                                    href="mailto:putain.wtf@protonmail.com">
                                    EMAIL
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className=" md:flex absolute mt-48 right-[10%] md:space-x-20 ">
                    <div className="hidden md:flex md:flex-col md:ml-14 md:justify-start">
                        {linkArray.map((link, index) => {
                            return (     
                                <Link key={index} href={link.href}  >
                                    <a className="h-10 w-10 p-2">
                                        <div className={`${link.iconClass} h-full w-full bg-center bg-contain bg-no-repeat`}>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="md:hidden">
                    <SocialBar/>
                </div> 
                
            </div>
        </>
    )  
}
export default Contact;

