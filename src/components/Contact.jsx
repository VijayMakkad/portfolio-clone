import React from 'react'
import { 
    FaDribbble,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className='flex flex-col items-start w-full h-auto p-24 bgclass rounded-xl' >
        <div className=' font-afacad flex flex-col gap-4'>
            <h1 className=' font-semibold text-5xl'>{`Want to work together?`}</h1>
            <p className=' font-normal text-xl'>{`Feel free to reach out for collaborations or just a friendly hello`}</p>
            <p className=' font-normal'>{`Sampleemail@provider.com`}</p>
        </div>

        <div className=' mt-12 lg:mx-6 flex lg:flex-row md:gap-2 lg:gap-8'>
              <button className='bg-black text-white px-6 py-1 lg:px-8 lg:py-2 rounded-xl' onClick={() => window.open('https://www.youtube.com')}>Contact me</button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.google.com')}><FaDribbble /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.instagram.com')}><FaInstagram /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.linkedin.com')}><FaLinkedin /></button>

        </div>

    </footer>
  )
}

export default Contact