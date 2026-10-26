import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <footer className="footer container mx-auto sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                   <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo image'/>
                        <Link href={'/'} className='text-[#FFFFFF] text-xl font-bold'>FITLOG</Link>
                    </div>
                    {/* <p>Copyright ©  - All right reserved</p> */}
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p className='text-[#8A92A0] font-normal text-[14px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;