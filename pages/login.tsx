import { Auth } from "@supabase/ui";
import Image from "next/image";
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { NextPage } from "next";
import { SupabaseClient } from "@supabase/supabase-js";

type LoginProps = {
    supabaseClient: SupabaseClient
}

const Login: NextPage<LoginProps> = ({supabaseClient}) => {
    const router = useRouter()
    
    useEffect(() => {
        const { data: authListener } = supabaseClient.auth.onAuthStateChange((event) => {
            if (event === 'SIGNED_IN') {
                if (window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {
                    router.back();
                } else {
                router.push("/");
                }
            }
        })
    
        return () => {
            authListener?.unsubscribe()
        }
    }, [])

    return (
        <>
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 filter backdrop-blur-[150px] bg-white bg-opacity-30 z-10"></div>
                <Image src="/unsplash_XUlsF9LYeVk-reduced.png" alt="gradient background image" layout="fill" objectFit="cover" objectPosition="center" />
            </div>
            <div className="min-h-[100vh] w-full flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white p-10 rounded-lg bg-opacity-80 filter backdrop-blur-3xl">
                    <Auth providers={['facebook', 'github']} supabaseClient={supabaseClient}/>
                </div>
            </div>
        </>
    )
}

export default Login