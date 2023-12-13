import React from 'react'
import Person from '../assets/person.jpg'
import { 
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
        <div className='flex-2 flex flex-col w-full lg:mr-12 lg:h-max border p-24 rounded-md bgclass gap-12 '>
            <h1 className='text-6xl font-afacad font-bold'>{`Hello, I'm Name, a product Designer With 7 years of experience.`}</h1>
            <h2 className='text-xl font-afacad font-normal'>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</h2>
            <div className=' mt-12 lg:mx-6 flex lg:flex-row md:gap-2 lg:gap-8'>
              <button className='bg-black text-white px-6 py-1 lg:px-8 lg:py-2 rounded-xl'>Contact me</button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.google.com')}><FaDribbble /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.instagram.com')}><FaInstagram /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black' onClick={() => window.open('https://www.linkedin.com')}><FaLinkedin /></button>

            </div>
          </div>
          <img src={Person} alt="person" srcSet={Person} loading='lazy' className=' flex flex-1 w-96 h-auto lg:h-fit rounded-lg lg:ml-12'/>
    </>
  )
}

export default Home