import React from 'react';
import bazar from './../../images/bazar.png';
import GooglePlay from './../../images/GooglePlay.png';
import AppStor from './../../images/AppStor.png';
import sec1 from './../../images/section1.png';

const Store = () => {
    return (
        <>
            <main id='main-coming' className='bg-[#F6F5F4]'>
                <section className='w-[100%] lg:w-[70%] p-[2rem] flex flex-col lg:flex-row lg:py-[5.8rem]'>
                    <div className='w-[100%] lg:w-[50%] lg:mr-[3rem] flex flex-col justify-center'>
                        <div className='text-[#4ECDC4] text-center lg:text-left font-[700] mb-[1rem] lg:mb-[2.5rem]'>
                            <h6>Neireez Store</h6>
                        </div>
                        
                        <div className='mb-[1rem] text-center lg:text-left'>
                            <h3 className='text-5xl font-bold'>
                                Coming Soon
                            </h3>
                        </div>

                        <div className='text-[#757575] text-center lg:text-left font-semibold'>
                            <p>Stay tuned for a new music store!</p>
                        </div>

                        <div className='mt-[3rem] mb-[1.5rem] hidden lg:flex'>
                            <a href='https://apps.apple.com/us/app/neireez-music-application/id1668434011' className='w-[33.333%] fucousAnim'>
                                <img className='h-full' src={AppStor} />
                            </a>
                            
                            <a href='https://play.google.com/store/apps/details?id=ir.neireez.app' className='w-[33.333%] mx-[1rem] fucousAnim'>
                                <img className='h-full' src={GooglePlay} />
                            </a>

                            <a href='http://cafebazaar.ir/app/?id=ir.neireez.app&ref=share' className='w-[33.333%] fucousAnim'>
                                <img className='h-full' src={bazar} />
                            </a>
                        </div>
                    </div>

                    <div className='px-[3rem] my-[2rem] lg:my-0 lg:p-0 lg:w-[50%] block'>
                        <img className='w-full' src={sec1} />
                    </div>

                    <div className='flex max-h-[2.5rem] lg:hidden'>
                        <a href='https://apps.apple.com/us/app/neireez-music-application/id1668434011' className='w-[33.333%] fucousAnim'>
                            <img className='h-full' src={AppStor} />
                        </a>
                        
                        <a href='https://play.google.com/store/apps/details?id=ir.neireez.app' className='w-[33.333%] mx-[1rem] fucousAnim'>
                            <img className='h-full' src={GooglePlay} />
                        </a>

                        <a href='http://cafebazaar.ir/app/?id=ir.neireez.app&ref=share' className='w-[33.333%] fucousAnim'>
                            <img className='h-full' src={bazar} />
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Store;