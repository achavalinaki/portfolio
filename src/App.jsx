import React from 'react';
import { LinkItem } from "./components/linkItem";
import { Contact } from "./components/Contact";

const links = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/ikaachaval/"
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/user/11169855272?si=a0964c4afa9447e9"
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61552674290040&locale=es_LA"
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/iñaki-achaval-867412145/"
  },
  {
    title: "Projects",
    url: "https://drive.google.com/drive/folders/1bfM6buzRFv7HsxrtT1BB6Vv-xXo6lg9b"
  },
]

function App() {
  return (
    <div className='container h-full flex flex-col items-center justify-start md:p-20'>
      <img src="./images/profileImage.jpg" alt="" class="rounded-full w-32 h-32 object-cover mt-10 md:mt-0 lg:mt-0 xl:mt-0" />
      <h1 className='text-black w-fit text-2xl'>Iñaki Achaval</h1>
      <h2 className='text-black w-fit text-2xl mt-2'>Community manager & Content creator</h2>
      <ul className='w-96 flex flex-col items-center justify-start mt-10 space-y-10'>
        {
          links.map((item, index) => {
            const { url, title } = item;
            return <LinkItem key={index} url={url} title={title} />
          })
        }
      </ul>
      <a href="./misc/resume.pdf" download={"./misc/resume.pdf"} className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-sm hover:bg-accent-hover h-[48px] bg-accent hover:bg-secondary-hover hover:scale-125 duration-500 md:btn-lg transition-all cursor-pointer mt-8'>
        Download resume
      </a>
      <Contact />
    </div>
  )
}

export default App
