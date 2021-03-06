import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import Menu from "../Menu/Menu"
import dynamic from 'next/dynamic'
import AccountButton from "../AccountButton/AccountButton";
import { SupabaseClient } from "@supabase/supabase-js"

function NavBar({supabaseClient}: {supabaseClient: SupabaseClient}) {
    const linkArray = [
        {title: "gallery", href: "/"},
        {title: "about", href:"/about"},
        {title: "contact", href:"/contact"},
    ]

    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.target.id === "navbar-area") {
                    setIsScrolled(!entry.isIntersecting)
                }
            });
          };
        const observer = new IntersectionObserver(callback, options);
        const target = document.querySelector('#navbar-area');
        if(target) observer.observe(target);
        return () => {
            if(target) observer.unobserve(target)
        }
    }, [])

    return (
        <>
            {isOpen === true ? <div className=" absolute inset-0 bg-white z-10"></div> : null}
            {(isOpen === true) ? 
                <Menu setIsOpen={setIsOpen} linkArray={linkArray} supabaseClient={supabaseClient} /> : (
                    <>
                        <div id="navbar-area" className="bg-transparent w-full md:h-[4.25rem] h-[3rem]"></div>
                        <div id="navbar" className={"fixed md:h-[4.25rem] h-[3rem] inset-x-0 z-10 top-0 bg-white " + (isScrolled ? 'bg-opacity-70 backdrop-blur-lg' : '')}>
                            <div className="flex h-full relative items-center justify-center">
                                <div className="absolute left-6 md:left-12 inset-y-0 flex items-center md:justify-between space-x-4">
                                    <Link href={"/"}>
                                        <a className=" bg-center bg-contain bg-no-repeat bg-nav-logo h-8 w-20">
                                        </a>
                                    </Link> 
                                    <div className="hidden sm:block w-28 h-8 bg-contain bg-no-repeat bg-center bg-fundraiser-gallery text-base antialiased italic font-times">
                                        
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-between items-center space-x-10">
                                    {linkArray.map((link, index) => {
                                        return (
                                            <Link key={index} href={link.href}>  
                                                <a 
                                                className={`font-arial text-sm text-black  ${(router.pathname === link.href) ? `font-bold` : `font-normal`} `}
                                                key={index}>
                                                {link.title}
                                                </a> 
                                            </Link>
                                        )
                                    })}   
                                </div>
                                <div className="absolute right-12 inset-y-0 hidden md:flex items-center">
                                    <AccountButton supabaseClient={supabaseClient} />
                                </div>
                                <div className="md:hidden absolute right-2 inset-y-0">
                                    <button 
                                    onClick={() => {setIsOpen(true)}}
                                    className="h-12 w-12 p-3">
                                        <div className="bg-nav-burger h-full w-full bg-center bg-contain bg-no-repeat">
                                        </div> 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default dynamic(() => Promise.resolve(NavBar), {
    ssr: false
})