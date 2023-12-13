import React from 'react'
import P1 from '../assets/p1.webp'
import P2 from '../assets/p2.webp'
import P3 from '../assets/p3.webp'
import P4 from '../assets/p4.webp'
import P5 from '../assets/p5.webp'
import P6 from '../assets/p6.webp'


const Projects = () => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
        <img src={P1} srcSet={P1} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
        <img src={P2} srcSet={P2} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
        <img src={P3} srcSet={P3} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
        <img src={P4} srcSet={P4} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
        <img src={P5} srcSet={P5} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
        <img src={P6} srcSet={P6} loading='lazy' className='transform hover:scale-105 transition-transform duration-300 lg:w-auto w-fit rounded-lg hover:cursor-pointer' onClick={() => window.open('https://www.youtube.com')}/>
    </div>
  )
}

export default Projects