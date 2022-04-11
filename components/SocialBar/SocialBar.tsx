import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function SocialBar() {
    const linkArray = [
        {href:"https://foundation.app/collection/putain", iconClass:"bg-foundation-black"},
        {href:"https://www.instagram.com/put.ain.wtf/", iconClass: "bg-insta-black"},
        {href:"https://app.endaoment.org/putain", iconClass: "bg-endaoment-black"},
        {href:"https://github.com/putain-wtf", iconClass: "bg-github-black"},
    ]
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.target.id === "social-area") {
                    setIsScrolled(!entry.isIntersecting)
                }
            });
          };
        const observer = new IntersectionObserver(callback, options);
        const target = document.querySelector('#social-area');
        if(target) observer.observe(target);
        return () => {
            if(target) observer.unobserve(target)
        }
    }, [])
    return (
        <>
            <div id="social-area" className="bg-transparent w-full h-[4.5rem] md:hidden"></div>
            <div className={`fixed inset-x-0 md:left-auto md:bottom-10 md:right-4 z-10 bottom-0 bg-white flex md:flex-col items-center justify-center p-3 space-x-1 ${isScrolled ? 'bg-opacity-70 backdrop-blur-lg' : ''}`}>
                {linkArray.map((entry, key) => {
                    return (
                        <Link key={key} href={entry.href}>
                            <a className="h-12 md:h-10 w-12 md:w-10 p-2">
                                <div className={`${entry.iconClass} h-full w-full bg-center bg-contain bg-no-repeat`}>
                                </div> 
                            </a>
                        </Link>
                    )
                })}
			</div>
        </>
    )
}