import NavBar from "../components/NavBar/NavBar";
import { NextPage } from "next";
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import SocialBar from "../components/SocialBar/SocialBar";

const Contact: NextPage = () => {
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
            <NavBar />
            <div className=" mx-auto md:px-40 max-w-lg md:max-w-screen-lg">
                <div className='text-center md:flex mt-20 md:space-x-16 '>
                    <div className='font-arial-black font-black text-base md:text-lg uppercase'>
                        Contact
                    </div>
                    <div className='font-times font-normal italic text-xl mt-2 px-6 antialiased leading-6 md:mt-0 md:text-left'>
                        You want to get involved or have a question about the project? Please don’t hesitate to drop us a message. We’ll get back as soon as we can.
                    </div>
                </div>
                <div className=" md:flex md:space-x-20 mt-4">
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
                    <div className="md:w-full">
                        <Formik 
                            initialValues={{
                                email: '' ,
                                name: '',
                                message: ''}}
                            // validationSchema={Yup.object({
                            //     name: Yup.string()
                            //     .min(2, 'Too Short!')
                            //     .max(50, 'Too Long!')
                            //     .required('Required'),
                            //     message: Yup.string()
                            //     .min(2, 'Your message is too short')
                            //     .required('Please fill in a message'),
                            //     email: Yup.string().email("Please fill in a valid Email Address").required("Please fill in a valid Email Address"),
                            // })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                }, 400);
                            }}
                        >                    
                            {({ errors, touched}) => (
                                <Form> 
                                    <div className=' mx-4 md:mx-0 '>
                                        <div className='flex flex-col items-center mt-4 md:flex-row md:space-x-3 md:mt-0'>
                                            <div className='w-full '>
                                                <Field 
                                                    className={inputClasses + inputErrorClasses(errors.name && touched.name ? true : false)} 
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name" 
                                                />
                                                <div className=' text-xs font-times italic md:mx-auto md:my-auto'><ErrorMessage name="name"/></div>
                                            </div>
                                            <div className='w-full'>
                                                <Field 
                                                    className={inputClasses + inputErrorClasses(errors.email && touched.email ? true : false)} 
                                                    name="email"
                                                    type="email"
                                                    placeholder="E-mail" 
                                                />
                                                <div className='text-xs font-times italic md:mx-auto md:my-auto '><ErrorMessage name="email"/></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center md:mt-1'>
                                            <Field 
                                                className={inputClasses + inputErrorClasses(errors.message && touched.message ? true : false)} 
                                                name="message"
                                                type="textarea"
                                                as="textarea"
                                                rows={4}
                                                placeholder="Message" 
                                            />  
                                            <div className=' mt-2 text-xs font-times italic'><ErrorMessage name="message"/></div>
                                        </div>
                                        <div className="md:flex md:justify-end">
                                            <button type="submit" className="block mt-2 mb-12 mx-auto bg-black md:mx-0 md:mb-0  ">
                                                <div className="py-1 px-16 md:px-10 md:py-1">
                                                    <div className=" font-arial font-bold uppercase text-white ">
                                                        Submit
                                                    </div>
                                                </div>
                                            </button> 
                                        </div> 
                                    </div> 
                                </Form>
                            )}   
                        </Formik>
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

