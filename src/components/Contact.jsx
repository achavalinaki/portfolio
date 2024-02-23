import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import emailjs from "emailjs-com";
import { useState } from 'react';

const contact = [
    {
        icon: <MdMailOutline />,
        title: 'Have a question?',
        subtitle: 'I am here to help you.',
        description: 'Email me at Ikaachaval@gmail.com',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Current Location',
        subtitle: 'Buenos Aires, Argentina',
    },
];

const succesfullEmail = "Thank you for your email!, i will answer you as soon as possible.";

const failedEmail = "Email could not be sent.";

const inputClassName = "bg-secondary text-paragraph h-[60px] outline-none pl-6 w-full font-body text-[15px] rounded-sm focus:outline focus:outline-1 focus:outline-accent";

const textAreaClassName = "bg-secondary text-paragraph resize-none w-full outline-none p-6 rounded-sm h-[200px] focus:outline focus:outline-1 focus:outline-accent;";

export const Contact = () => {
    const [response, setResponse] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gdqstuh', 'template_rx1vc6v', e.target, 'RbDs3jqEF-J_5qbsG')
            .then(() => {
                setResponse(succesfullEmail);
            }, () => {
                setResponse(failedEmail);
            });
    }

    return (
        <section className='mt-6 section max-sm:text-center' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-xl text-black font-inter section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
                        Contact me
                    </h2>
                    <p className='text-lg  text-black mt-1 px-10 mb-5'>
                        Have any comments or want to contact me?, send me an email via de form entering your contact details!
                    </p>
                </div>
                <div
                    className='flex flex-col lg:gap-x-8'
                >
                    <div
                        className=' w-full flex flex-row mb-12 max-lg:flex-col items-center align-middle'
                    >
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description } = item;
                            const classText = `flex flex-col h-full items-center justify-center align-middle lg:flex-row gap-x-4 w-1/2 ${index + 1 == contact.length ? "max-lg:mt-6" : ""}`;
                            return (
                                <div className={classText} key={index}>
                                    <div className='text-black rounded-sm w-14 h-full flex items-center justify-center self-center text-2xl'>
                                        {icon}
                                    </div>
                                    <div className="flex flex-col justify-center align-middle">
                                        <h4 className='font-body text-xl mb-1 text-black'>{title}</h4>
                                        <p className='mb-1 text-black'>{subtitle}</p>
                                        <p className='font-normal'>{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <form
                        className='space-y-8 w-full px-4'
                        onSubmit={handleOnSubmit}
                    >
                        <div className='flex gap-8'>
                            <input className={inputClassName} type='text' placeholder='Your name' name='name' required={true} />
                            <input className={inputClassName} type='email' placeholder='Your email' name='email' required={true} />
                        </div>
                        <input className={inputClassName} type='text' placeholder='Subject' name='subject' required={true} />
                        <textarea
                            className={textAreaClassName}
                            placeholder='Your message' required={true} name='message'
                        ></textarea>
                        <button className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-sm hover:bg-accent-hover h-[54px] bg-accent hover:bg-secondary-hover hover:scale-125 transition-all duration-500' type='submit'>
                            Send message
                        </button>
                        <div className=''>
                            {
                                response == succesfullEmail && <p className='block text-green-500 border border-green-500 w-fit p-3'>
                                    {succesfullEmail}
                                </p>}

                            {
                                response == failedEmail && <p className='block text-red-500 border border-red-500 w-fit p-3'>
                                    {failedEmail}
                                </p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
