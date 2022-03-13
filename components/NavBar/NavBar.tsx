import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import Menu from "../Menu/Menu"

export default function NavBar() {
    const linkArray = [
        {title: "gallery", href: "/"},
        {title: "stories", href:"/stories"},
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
                <Menu setIsOpen={setIsOpen} linkArray={linkArray} /> : (
                    <>
                        <div id="navbar-area" className="bg-transparent w-full h-[4.25rem]"></div>
                        <div id="navbar" className={"fixed inset-x-0 z-10 top-0 bg-white " + (isScrolled ? 'bg-opacity-70 backdrop-blur-lg' : '')}>
                            <div className="flex items-center justify-between pl-6 pr-2 md:px-12 md:py-4">
                                <div className="flex items-center md:justify-between space-x-4">
                                    <button className="h-8 w-20">
                                        <div className="h-full w-full bg-center bg-contain bg-no-repeat bg-nav-logo">
                                        </div>
                                    </button> 
                                    <div className="hidden sm:block w-28 h-8 bg-contain bg-no-repeat bg-center bg-fundraiser-gallery text-base antialiased italic font-times">
                                        
                                    </div>
                                </div>
                                <div className="hidden md:flex justify-between items-center space-x-10">
                                    {linkArray.map((link, index) => {
                                        return (
                                            <button key={index}>
                                                <Link key={index} href={link.href}>  
                                                    <a 
                                                    className={`font-arial text-sm text-black  ${(router.pathname === link.href) ? `font-bold` : `font-normal`} `}
                                                    key={index}>
                                                    {link.title}
                                                    </a> 
                                                </Link>
                                            </button>
                                        )
                                    })}   
                                </div>
                                <div className="md:hidden">
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