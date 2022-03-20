import { Auth } from "@supabase/ui";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from "react-query";
import NavBar from "../components/NavBar/NavBar";
import { getUserProfile } from "../util/supabaseFetching";
import AccountButton from "../components/AccountButton/AccountButton";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Account({supabaseClient}) {
    const queryClient = useQueryClient()
    const { user } = Auth.useUser();
    const [isEditing, setIsEditing] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [])
    const usernameQuery = useQuery(['user-profile', user?.id], () => getUserProfile({userId: user?.id, supabaseClient: supabaseClient}))
    return (
        <>
            <NavBar supabaseClient={supabaseClient}/>
            <div className="min-h-[85vh] w-full flex flex-col justify-center items-center">
                <div className="my-auto flex flex-col items-center justify-center space-y-10 w-full">
                    <div className="font-arial antialiased font-black text-base uppercase text-center leading-none">Account</div>
                    {isEditing ? (
                        <Formik
                            enableReinitialize={true}
                            initialValues={{ username: usernameQuery.data?.[0]?.username ?? '', email: user?.email ?? '', biddingmode: usernameQuery.data?.[0]?.anonymous_bidding ? "true" : "false" }}
                            validationSchema={Yup.object({
                                username: Yup.string()
                                    .max(20, 'Must be 20 characters or less').typeError("This field is required").required("This field is required")
                            })}
                            onSubmit={async (values, { setErrors }) => {
                                    const anonymous_bidding = values.biddingmode === "false" ? false : true
                                    const { data, error } = await supabaseClient
                                        .from('profiles')
                                        .upsert([
                                            { id: user?.id, username: values.username.toLowerCase(), anonymous_bidding: anonymous_bidding }
                                        ])
                                    if(error) {
                                        if (error.message === 'duplicate key value violates unique constraint "profiles_username_key"') {
                                            setErrors({username: "This username is already taken"})
                                        }
                                    } else if(!data) {
                                        alert("Something went wrong")
                                    } else {
                                        queryClient.invalidateQueries(['user-profile', user?.id])
                                        setIsEditing(false)
                                    }
                                    
                            }}
                        >
                            {({ values, errors, touched, isValid, dirty, isSubmitting }) => {
                                return (
                                <Form className="flex flex-col items-center space-y-10 w-full max-w-xs">
                                    <div className="space-y-4 w-full">
                                        <div className="flex flex-col justify-center items-stretch">
                                            <label className="font-arial antialiased font-normal text-sm uppercase text-center" htmlFor="username">username</label>
                                            <Field name="username" type="text" className={`mt-1.5 border-[1px]  py-1 font-arial antialiased font-normal text-sm uppercase text-center outline-[3px] focus:outline  placeholder:text-[#B8B8B8] ${errors.username && touched.username ? "outline-error-red/20 border-error-red text-error-red" : "outline-black/20 border-black text-black"}`} placeholder="username" />
                                            <div className="font-times italic text-error-red text-sm text-center mt-1">
                                                <ErrorMessage name="username"/>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center items-stretch">
                                            <label className="font-arial antialiased font-normal text-sm uppercase text-center" htmlFor="email">email</label>
                                            <Field disabled name="email" type="text" className="mt-1.5 border-[1px] border-black py-1 font-arial antialiased font-normal text-sm uppercase text-center outline-[3px] focus:outline outline-black/20 placeholder:text-[#B8B8B8] bg-white disabled:opacity-20" placeholder="email" />
                                            <ErrorMessage name="email" />
                                        </div>
                                        <div className="flex flex-col justify-center items-stretch">
                                            <div className="font-arial antialiased font-normal text-sm uppercase text-center">bidding mode</div>
                                            <div className="flex space-x-3 mt-1.5">
                                                <label className={`flex-1 font-arial antialiased font-normal text-sm uppercase text-center border-[1px] px-3 py-1 border-black ${values.biddingmode === "false" ? "bg-white text-black" : "bg-black text-white"}`}>
                                                    <Field name="biddingmode" type="radio" className="appearance-none" value="true" />
                                                    anonymous
                                                </label>
                                                <label className={`flex-1 font-arial antialiased font-normal text-sm uppercase text-center border-[1px] px-3 py-1 border-black ${values.biddingmode === "false" ? "bg-black text-white" : "bg-white text-black"}`}>
                                                    <Field name="biddingmode" type="radio" className="appearance-none" value="false" />
                                                    with username
                                                </label>
                                            </div>
                                            <ErrorMessage name="biddingmode" />
                                        </div>
                                    </div>
                                    <button type="submit" className="text-white bg-black px-4 md:py-0.5 text-sm font-arial not-italic font-bold antialiased py-1 uppercase">Save</button>
                                </Form>
                            )}}
                        </Formik>
                    ) : (
                        <>
                            <div className="space-y-3">
                                <div className="">
                                    <div className="font-arial antialiased font-bold text-sm uppercase text-center">username</div>
                                    <div className="font-times antialiased font-normal italic text-base text-center">{usernameQuery.data?.[0]?.username ?? "-"}</div>
                                </div>
                                <div className="">
                                    <div className="font-arial antialiased font-bold text-sm uppercase text-center">email</div>
                                    <div className="font-times antialiased font-normal italic text-base text-center">{user?.email}</div>
                                </div>
                                <div className="">
                                    <div className="font-arial antialiased font-bold text-sm uppercase text-center">bidding mode</div>
                                    <div className="font-times antialiased font-normal italic text-base text-center">{usernameQuery.data?.[0]?.anonymous_bidding ? "anonymous" : "with username"}</div>
                                </div>
                            </div>
                            <button className="text-white bg-black px-4 md:py-0.5 text-sm font-arial not-italic font-bold antialiased py-1 uppercase" onClick={() => {
                                setIsEditing(true)
                            }}>EDIT</button>
                        </>
                    )}
                </div>
                <AccountButton supabaseClient={supabaseClient}/>
            </div>
        </>
    )
}