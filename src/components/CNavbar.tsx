import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { black_logo } from '../assets';
import { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: 'bg-red-500 hover:bg-red-600',
      },
    },
    
  };

function CNavbar({home,about,academic, clubs,resources}) {


  return (
    <Navbar fluid rounded className='font-oswald' >
    <NavbarBrand href="https://solaristech.in">
      <img src={black_logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold">BITNet</span>
    </NavbarBrand>
    <div className="flex md:order-2">
        <NavbarToggle />
      </div>
    <NavbarCollapse>
    {home? <NavbarLink href="#" className='text-black' active><span className='text-black' >Home</span></NavbarLink> : <NavbarLink href="#"><span className='text-slate-600' >Home</span></NavbarLink>}
    {about? <NavbarLink href="/about" active><span className='text-black' >About</span></NavbarLink> :  <NavbarLink href="#"><span className='text-slate-400' >About</span></NavbarLink>}
    {academic? <NavbarLink href="/academic" active><span className='text-black' >Academic</span></NavbarLink> : <NavbarLink href="#"><span className='text-slate-400' >Academic</span></NavbarLink>}
    {clubs? <NavbarLink href="/clubs" active><span className='text-black' >Clubs</span></NavbarLink> : <NavbarLink href="#"><span className='text-slate-400' >Clubs</span></NavbarLink>}
    {resources? <NavbarLink href="/resources" active><span className='text-black' >Resources</span></NavbarLink> : <NavbarLink href="#"><span className='text-slate-400' >About</span></NavbarLink>}
    </NavbarCollapse>
  </Navbar>
  )
}

export default CNavbar