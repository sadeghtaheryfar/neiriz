import React from 'react';
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
                    </div>

                    <div className='px-[3rem] lg:p-0 lg:w-[50%] block'>
                        <img className='w-full' src={sec1} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Store;