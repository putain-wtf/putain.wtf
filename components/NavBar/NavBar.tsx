import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import Link from "next/link"

export default function NavBar() {
    const linkArray = [
        {title: "gallery", href:"#gallery"},
        {title: "about", href:"#about"},
        {title: "contact", href:"#contact"},
    ]

    const path = useRouter()
    const pathname = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)


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
            <div id="navbar-area" className="bg-transparent w-full h-[4.25rem]"></div>
            <div id="navbar" className={"fixed inset-x-0 z-10 top-0  " + (isScrolled ? 'backdrop-blur-nav-sm' : '')}>
                <div className="flex justify-between">
                    <div className="flex md:items-center md:justify-between">
                        <button className="ml-4 h-14 w-20 mr-8 md:mt-2">
                                <div className="md:ml-6 h-full w-full bg-center bg-contain bg-no-repeat bg-nav-logo">
                                </div>
                            </button> 
                            <div className="mt-3 hidden md:block text-xs ">
                                fundraiser gallery
                            </div>
                        </div>
                        <div className="hidden md:flex justify-between items-center mt-2 mr-8">
                            {linkArray.map((link, index) => {
                                return (
                                    <button key={index} className="mx-6">
                                        <Link key={index} href={link.href}>  
                                            <a 
                                            className={`font-arial text-sm  ${(path.asPath.includes(link.title)) ? `font-bold` : `font-normal`} `}
                                            key={index}>
                                            {link.title}
                                            </a> 
                                        </Link>
                                    
                                    </button>
                                )
                            })}   
                        </div>
                        <div className="md:hidden">
                            <button className="h-12 w-12 p-3.5 md:p-2.5 mr-2">
                                <div className="bg-nav-burger h-full w-full bg-center bg-contain bg-no-repeat">
                                </div> 
                            </button>
                        </div>
                    </div>
                </div>
              
       
        </>
    )
}