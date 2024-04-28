import React from 'react';
import logo from './../images/neiriz-logo.png';
import LogoMobile from './../images/neiriz-logo-mobile.png';
import icon from './../images/neiriz-icon.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const ToggleMenu = () => {
        document.getElementById('menu-mobile').classList.toggle('active-menu-mobile');
        document.getElementById('menu-mobile').classList.toggle('disable-menu-mobile');
    }
    return (
        <>
            <header id='main-header'>
                <section className='flex w-full lg:w-[70%] h-full'>
                    <div className='h-full w-full lg:w-max flex justify-center items-center relative'>
                        <Link className='h-full flex items-center' to='/'>
                            <img src={logo} className='h-full max-w-none lg:h-[3.5rem] hidden mt-[0.2rem] lg:block' />
                            
                            <img src={LogoMobile} className='h-full lg:h-auto mt-[0.2rem] block lg:hidden' />
                        </Link>

                        <button onClick={ToggleMenu} className='lg:hidden absolute left-[0.5rem] cursor-pointer'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7L22 7" stroke="black" stroke-width="1.4" stroke-linecap="square"/>
                            <path d="M2 12.5L16 12.5" stroke="black" stroke-width="1.4" stroke-linecap="square"/>
                            <path d="M2 18L8 18" stroke="black" stroke-width="1.4" stroke-linecap="square"/>
                            </svg>
                        </button>
                    </div>

                    <div className='w-full h-full hidden lg:flex'>
                        <ul className='menu-box-header w-full h-full flex items-center'>
                            <li className={(location.pathname == '/') ? '!text-black' : '' + 'active:underline'}>
                                <Link to='/'>Home</Link>
                            </li>

                            <li className={(location.pathname == '/contact') ? '!text-black' : '' + 'active:underline'}>
                                <Link to='/contact'>Contact</Link>
                            </li>

                            <li className={(location.pathname == '/blog') ? '!text-black' : '' + 'active:underline'}>
                                <Link to='/blog'>Blog</Link>
                            </li>

                            <li className={(location.pathname == '/store') ? '!text-black' : '' + 'active:underline'}>
                                <Link to='/store'>Store</Link>
                            </li>

                            <li className={(location.pathname == '/about-us') ? '!text-black' : '' + 'active:underline'}>
                                <Link to='/about-us'>About</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section id='menu-mobile' className='disable-menu-mobile'>
                    <div className='h-[4rem] w-full flex justify-center items-center absolute top-0 p-[0.5rem] border-b-[2px]'>
                        <Link className='h-full flex items-center' to='/'>
                            <img src={icon} className='h-full lg:h-auto' />
                        </Link>

                        <button onClick={ToggleMenu} className='lg:hidden absolute left-[1rem] cursor-pointer'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.42456 5.85938L18.5753 19.0101" stroke="black" stroke-width="1.4"/>
                            <path d="M5.42456 19.1406L18.5753 5.98987" stroke="black" stroke-width="1.4"/>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <ul className='menu-mobile'>
                        <li className={(location.pathname == '/') ? '!text-[#4ECDC4]' : '' + 'active:underline'}>
                                <Link to='/'>Home</Link>
                            </li>

                            <li className={(location.pathname == '/contact') ? '!text-[#4ECDC4]' : '' + 'active:underline'}>
                                <Link to='/contact'>Contact</Link>
                            </li>

                            <li className={(location.pathname == '/blog') ? '!text-[#4ECDC4]' : '' + 'active:underline'}>
                                <Link to='/blog'>Blog</Link>
                            </li>

                            <li className={(location.pathname == '/store') ? '!text-[#4ECDC4]' : '' + 'active:underline'}>
                                <Link to='/store'>Store</Link>
                            </li>

                            <li className={(location.pathname == '/about-us') ? '!text-[#4ECDC4]' : '' + 'active:underline'}>
                                <Link to='/about-us'>About</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Header;