import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

import {  Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const btnRef = React.useRef()

  const handleDrawerOpen = () => setIsOpen(true);
  const handleDrawerClose = () => setIsOpen(false);


  return (
    <nav className=' w-2/3 lg:w-full lg:mx-0 h-auto mt-4 mb-6 flex flex-row justify-between items-center text-black font-afacad'>
        <Link to="Home" className='mx-2 hover:cursor-pointer' smooth={true}>
            <div className='flex flex-row justify-start items-center'>
                <div className='w-4 h-4 rounded-full bg-teal-950 mx-2'></div>
                Vijay Makkad
            </div>
        </Link>
        
        <Button ref={btnRef} onClick={handleDrawerOpen} display={{ base: "block", md: "none" }}>
          <RxHamburgerMenu />
        </Button>

        <Drawer isOpen={isOpen} placement="right" onClose={handleDrawerClose} finalFocusRef={btnRef}>
          <DrawerOverlay>
            <DrawerContent >
              <DrawerCloseButton />
              <DrawerBody>
                <ul className='flex flex-col justify-end items-center list-none font-afacad font-semibold text-xl my-12 gap-6'>
                  <li><Link onClick={handleDrawerClose} to="Home" className='mx-4 hover:cursor-pointer' smooth={true}>Home</Link></li>
                  <li><Link onClick={handleDrawerClose} to="Projects" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Projects</Link></li>
                  <li><Link onClick={handleDrawerClose} to="Contact" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Contact</Link></li>
                </ul>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>


        <ul className='hidden lg:flex flex-col md:flex-row justify-end items-center list-none '>
            <li><Link to="Home" className='mx-4 hover:cursor-pointer' smooth={true}>Home</Link></li>
            <li><Link to="Projects" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Projects</Link></li>
            <li><Link to="Contact" className='mx-4 text-gray-600  hover:cursor-pointer' smooth={true}>Contact</Link></li>
        </ul>
    </nav> 
  )
}

export default Navbar