import Link from "next/link"
import { useRouter } from "next/router"

type AppProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    linkArray: Array<{title: string, href: string}>
}

export default function Menu({ setIsOpen, linkArray}: AppProps)  {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center w-full justify-between text-center text-ben-black fixed inset-0 bg-white z-[100] p-8">
            <button onClick={() => setIsOpen(false)}  > 
                <div className="w-12 h-12 relative p-4" >
                    <div className="bg-menu-cross bg-no-repeat bg-center bg-contain w-full h-full"></div>  
                </div>
            </button>
            <div className="flex flex-col margin-auto justify-between h-32 font-fg space-y-4">
                {linkArray.map((link, index) => {
                    return (
                        <>
                          <button 
                            key={index} 
                            onClick={() => {setIsOpen(false)}}>
                                <Link key={index} href={link.href}>  
                                    <a 
                                    className={`font-arial text-lg text-black ${(router.pathname === link.href) ? `font-bold` : `font-normal`} `}
                                    key={index}>
                                    {link.title}
                                    </a> 
                                </Link> 
                            </button>
                        
                        
                        </>
                       
                )})}
            </div>
            <div className="w-20 h-20">
                <div className="bg-nav-logo w-full h-full bg-no-repeat bg-center bg-contain">

                </div>
            </div>
        </div> 
    ) 
}