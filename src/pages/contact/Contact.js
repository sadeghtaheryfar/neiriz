import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from './../../images/Instagram.png';
import WhatsApp from './../../images/WhatsApp.png';
import Telegram from './../../images/Telegram.png';
import mail from './../../images/mail.png';
import LinkedIN from './../../images/LinkedIN.png';
import Youtube from './../../images/Youtube.png';

const Contact = () => {
    return (
        <>
            <main id='main-main' className='bg-[#F6F5F4]'>
                <section className='w-[100%] flex justify-center items-center p-[2rem] mt-[4rem] lg:py-[4rem]'>
                    <section className='w-[100%] lg:w-[60%] lg:p-[2rem]'>
                        <a href='https://www.instagram.com/neireez.app/' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={Instagram} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>Instagram Page</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Visit</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Explore guides, posts, and direct support chat on our Instagram page.</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href='https://chat.whatsapp.com/HLzrhvP2FRS1QrSGfFxIy7' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={WhatsApp} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>Whatsapp Group</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Join</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Join our Whatsapp group for real-time updates and community discussions.</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://wa.me/qr/HV5YT7BECNNVN1' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={WhatsApp} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>Whatsapp Direct</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Chat</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Connect with us instantly through Whatsapp chat for personalized assistance.</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href='https://t.me/neireezapp' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={Telegram} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>Telegram</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Chat</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Get support and stay updated with our Telegram chat assistance.</p>
                                </div>
                            </div>
                        </a>

                        <a href="mailto:neireezapplication@gmail.com" className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={mail} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>Email</h4>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Reach out to us via email for inquiries, support, and collaboration opportunities.</p>
                                </div>
                            </div>
                        </a>
                        
                        <a href='https://www.linkedin.com/company/neireez-music-application/' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={LinkedIN} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>LinkedIn Page</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Visit</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Connect with us on our LinkedIn page.</p>
                                </div>
                            </div>
                        </a>

                        <a href='https://youtube.com/@neireez?si=3UkNmPo-VhRrSwK4' className='transition hover:scale-[1.02] flex items-center bg-white my-[1rem] lg:my-[1.5rem] cursor-pointer p-[1rem] lg:p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[1rem]'>
                            <div className='min-w-[3rem] w-[3rem] h-[3rem] mr-[1rem]'>
                                <img className='w-full h-full' src={Youtube} />
                            </div>

                            <div>
                                <div className='flex items-center mb-[0.5rem]'>
                                    <h4 className='text-[2rem] font-[700]'>YouTube Chanel</h4>

                                    <div className='bg-[#4ECDC4] rounded-[6px] py-[4px] px-[8px] text-[12px] text-white mt-[0.2rem] ml-[0.5rem]'>
                                        <span>Visit</span>
                                    </div>
                                </div>

                                <div className='text-[#757575]'>
                                    <p>Explore our YouTube channel for informative videos, tutorials, and engaging content.</p>
                                </div>
                            </div>
                        </a>
                    </section>
                </section>
            </main>
        </>
    );
};

export default Contact;