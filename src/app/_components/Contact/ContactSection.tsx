"use client"
import React, {useState} from "react";
import useContactForm from "@/hooks/useContactForm";
import sendEmail from "@/mail/send-mail";

const ContactSection = (props: any) => {
    const {values , handleChange} = useContactForm();
    const [responseMessage, setResponseMessage] = useState(
        {isSuccessful: false, message: ''});

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const req = await sendEmail(values.email, values.name, values.message);
            if (req.status === 250) {
                setResponseMessage(
                    {isSuccessful: true, message: 'Thank you for your message.'});
            }
        } catch (e) {
            console.log(e);
            setResponseMessage({
                isSuccessful: false,
                message: 'Oops something went wrong. Please try again.',
            });
        }
    };

    return <div className="grid grid-cols-1 justify-center items-center w-full">
        <div className="text-center font-bold text-3xl text-black p-10">Contact us</div>
        <div className="text-center text-gray-600 text-l">N hésitez pas à me contacter par ce formulaire</div>
        <div className="flex justify-center">
            <form className="container w-full max-w-3xl" onSubmit={handleSubmit}>
                <div className="w-full text-gray-600 body-font relative px-5">
                    <div className="flex flex-wrap -m-2 ">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    required
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name" type="text" value={values.name}
                                    onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    required
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="inline-full-name" type="text" value={values.email}
                                    onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="message"
                                       className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message"
                                          required
                                          value={values.message}
                                          onChange={handleChange}
                                          className="w-full h-32 text-base outline-none resize-none bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex mx-auto"
                                type="button">
                                Envoyer
                            </button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-indigo-500">alexis@staaack.io</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
        ;
}

export default ContactSection;