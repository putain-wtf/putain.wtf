import Link from "next/link"
import { useRouter } from "next/router"
import AccountButton from "../AccountButton/AccountButton"

type AppProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    linkArray: Array<{title: string, href: string}>
}

export default function Menu({ setIsOpen, linkArray, supabaseClient}: AppProps)  {
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
                            <Link key={index} href={link.href}>  
                                <a 
                                className={`font-arial text-lg text-black ${(router.pathname === link.href) ? `font-bold` : `font-normal`} `}
                                key={index}
                                onClick={() => {setIsOpen(false)}}>
                                {link.title}
                                </a> 
                            </Link> 
                        </>
                       
                )})}
                <AccountButton supabaseClient={supabaseClient}/>
            </div>
            <Link href={"/"}>
                <a className="bg-nav-logo w-20 h-20 bg-no-repeat bg-center bg-contain" onClick={() => {setIsOpen(false)}}>
                </a>
            </Link>
        </div> 
    ) 
}