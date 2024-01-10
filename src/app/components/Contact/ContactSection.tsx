"use client"
import React, {useState} from "react";
import Title from "@/app/components/Common/Title";
import {useForm} from "react-hook-form";

const ContactSection = (props: any) => {
    const [mailSending, setMailSendig] = useState(false);
    const [mailSent, setMailSent] = useState(false);
    const [mailSentError, setMailSentError] = useState(null);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmitHandler = async (data: any) => {
        if (!mailSending) {
            setMailSendig(true);
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const result = await response.json();

            setMailSendig(false);

            if (!response.ok) {
                setMailSentError(result.message);
            } else {
                reset();
                setMailSent(true);
                setMailSentError(null);
            }
        }

    }

    return <div>

        <div className="flex items-center mb-10 w-full">
            <Title title="Contacts" subtitle=""/>
        </div>
        <div className="grid grid-cols-1 justify-center items-center w-full p-8">
            {mailSent && (
                <div className="text-center text-green-500 text-l">Your message is sent</div>)}
            <div className="flex justify-center">
                <form className="w-full max-w-3xl" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="w-full text-gray-600 body-font relative px-5">
                        <div className="flex flex-wrap -m-2 ">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-lg text-gray-600">Name</label>
                                    <input
                                        id="name"
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        {...register("name", {required: true})} />
                                    {errors.name && (
                                        <p className="font-bold text-red-600 text-lg">You must filled your name</p>)}
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
                                    <input
                                        id="email"
                                        className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        {...register("email", {required: true})} />
                                    {errors.email && (
                                        <p className="font-bold text-lg text-red-600">You must filled your email</p>)}
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message"
                                           className="leading-7 text-lg text-gray-600">Message</label>
                                    <textarea
                                        id="message"
                                        className="w-full h-32 text-base outline-none resize-none appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        {...register("message", {required: true})} >
                                </textarea>
                                    {errors.message && (
                                        <p className="font-bold text-lg text-red-600">You must filled a message</p>)}
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {!mailSending &&
                                    <button
                                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex mx-auto"
                                        type="submit">
                                        Envoyer
                                    </button>}
                            </div>
                            {mailSentError && (
                                <p className="font-bold text-red-600">An error occured: {mailSentError}</p>)}
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-indigo-500 text-xl">alexis@staaack.io</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        ;
}

export default ContactSection;