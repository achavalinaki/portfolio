import React from 'react'

export const LinkItem = ({ url, title }) => {
    const clases = {
        Instagram: `border-solid border-4 border-black w-full px-20 py-3 text-black flex justify-center items-center cursor-pointer ease-linear duration-200 hover:scale-125 hover:border-Instagram hover:text-Instagram hover:bg-[#FB006028] max-sm:hover:scale-100`,
        Spotify: `border-solid border-4 border-black w-full px-20 py-3 text-black flex justify-center items-center cursor-pointer ease-linear duration-200 hover:scale-125 hover:border-Spotify hover:text-Spotify hover:bg-[#1ED76063] max-sm:hover:scale-100`,
        Linkedin: `border-solid border-4 border-black w-full px-20 py-3 text-black flex justify-center items-center cursor-pointer ease-linear duration-200 hover:scale-125 hover:border-Linkedin hover:text-Linkedin hover:bg-[#5EAEFF4C] max-sm:hover:scale-100`,
        Facebook: `border-solid border-4 border-black w-full px-20 py-3 text-black flex justify-center items-center cursor-pointer ease-linear duration-200 hover:scale-125 hover:border-Facebook hover:text-Facebook hover:bg-[#5EAEFF4C] max-sm:hover:scale-100`,
        Projects: `border-solid border-4 border-black w-full px-20 py-3 text-black flex justify-center items-center cursor-pointer ease-linear duration-200 hover:scale-125 hover:border-Projects hover:text-Projects hover:bg-[#8A680144] max-sm:hover:scale-100`
    }
    return (
        <a 
            className={clases[title]}
            href={url}
            target='_blank'
        >
            {title}
        </a>
    );
};