import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import Navlinks from './Navlinks';
import NavbarBtn from './NavbarBtn';

const Navbar = () => {
    const navLinks=(
        <>
        <li>
        <Navlinks href={'/'}>
            Workouts
        </Navlinks>
        </li>
        <li>
        <Navlinks href={'/myPlan'}>
            My plan
        </Navlinks>
        </li>
        
        </>
    );
    return (
        <div>
            <div className="navbar container mx-auto p-4 bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo image'/>
                        <Link href={'/'} className='text-[#FFFFFF] text-xl font-bold'>FITLOG</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <NavbarBtn/> 
                </div>
            </div>

        </div>
    );
};

export default Navbar;