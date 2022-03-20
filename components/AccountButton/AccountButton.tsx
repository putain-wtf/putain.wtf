import { useRouter } from "next/router";
import Link from "next/link";
import { Auth } from "@supabase/ui";
import dynamic from "next/dynamic";

function AccountButton({supabaseClient}) {
    const router = useRouter()
    const { user } = Auth.useUser();
    return user ? router.pathname === "/account" ? (
        <button className="text-black bg-white border-[1px] border-black px-4 text-sm font-arial not-italic font-bold antialiased py-1" onClick={async () => {
            try {
                await supabaseClient.auth.signOut()
                router.push("/");
            } catch (error) {
                alert(error)
            }
        }}>SIGN OUT</button>
    ) : (
        <Link href="/account">
            <a className="text-black bg-white border-[1px] border-black px-4 text-sm font-arial not-italic font-bold antialiased py-1">ACCOUNT</a>
        </Link>
    ) : (
        <Link href="/login">
            <a className="text-black bg-white border-[1px] border-black px-4 text-sm font-arial not-italic font-bold antialiased py-1">LOGIN</a>
        </Link>
    )
}

export default dynamic(() => Promise.resolve(AccountButton), {
    ssr: false
})