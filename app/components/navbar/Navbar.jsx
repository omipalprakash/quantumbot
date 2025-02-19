'use client';
import React, { useRef } from 'react';
import Image from 'next/image';


const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
    return (
        <>
            <nav className='w-full  py-[0.6rem] z-50'>
                {/* <hr className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2" style={{ backgroundImage: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 52.07%, rgba(255, 255, 255, 0) 100%)' }} /> */}

                <div className='container'>
                    <div className='nav__inner flex items-center justify-between'>
                        <a href="#top">
                            <Image src="/assets/images/logo.png" width={62} height={20} alt="Logo" className='mr-14 cursor-pointer' />
                        </a>
                        <ul className='hidden lg:flex items-center gap-3 lg:gap-4'>
                            <li><a className='text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#top">Home</a></li>
                            <li><a className='text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#about">About</a></li>
                            <li><a className='text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#services">Services</a></li>
                            <li><a className='text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#portfolio">Portfolio</a></li>
                            <li><a className='text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#contact">Contact</a></li>
                        </ul>
                        <div className='flex items-center gap-[14px]'>
                            <button>
                                <Image src="/assets/images/moon_icon.png" alt='Moon Icon' width={24} height={24} />
                            </button>
                            <a href="#contact" className='hidden lg:flex new-button_button--primary font-medium justify-center  flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple text-sm px-[30px] py-[14px]'>Book a Demo <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span></a>
                            <a href="#contact" className='hidden lg:block font-normal text-xs md:text-sm leading-5  select-none cursor-pointer transition-all duration-300 hover:text-opacity-75 text-white'>Log In</a>
                            <button className='block lg:hidden' onClick={openMenu}>
                                <Image src="/assets/images/menu-white.png" alt='Moon Icon' width={24} height={24} />
                            </button>
                        </div>
                        {/*----mobile menu--------*/}
                        <ul ref={sideMenuRef} className=' flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                            <div className='absolute right-6 top-6' onClick={closeMenu}>
                                <Image src="/assets/images/close-black.png" alt='Moon Icon' width={24} height={24} />
                            </div>
                            <li><a className='text-black bg-transparent text-sm flex  px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#top" onClick={closeMenu}>Home</a></li>
                            <li><a className='text-black bg-transparent text-sm flex  px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#about" onClick={closeMenu}>About</a></li>
                            <li><a className='text-black bg-transparent text-sm flex  px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#services" onClick={closeMenu}>Services</a></li>
                            <li><a className='text-black bg-transparent text-sm flex  px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                            <li><a className='text-black bg-transparent text-sm flex  px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70' href="#contact" onClick={closeMenu}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;