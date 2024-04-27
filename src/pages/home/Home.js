import React from 'react';
import sec1 from './../../images/section1.png';
import sec2 from './../../images/section2.png';
import bazar from './../../images/bazar.png';
import GooglePlay from './../../images/GooglePlay.png';
import AppStor from './../../images/AppStor.png';
import sec4 from './../../images/section4.png';
import sec5 from './../../images/section5.png';
import sec6 from './../../images/section6.png';
import sec7 from './../../images/section7.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <main id='main-home'>
                <section className='bg-[#F6F5F4] flex justify-center items-center'>
                    <section className='w-[100%] lg:w-[70%] p-[2rem] flex flex-col lg:flex-row lg:py-[5.8rem]'>
                        <div className='w-[100%] lg:w-[50%] lg:mr-[3rem] flex flex-col justify-center'>
                            <div className='text-[#4ECDC4] text-center lg:text-left font-[700] mb-[1rem] lg:mb-[2.5rem]'>
                                <h6>Neireez App</h6>
                            </div>
                            
                            <div className='mb-[1rem] text-center lg:text-left'>
                                <h3 className='text-5xl font-bold'>
                                    Effective Music Learning & Practice
                                </h3>
                            </div>

                            <div className='text-[#757575] text-center lg:text-left font-semibold'>
                                <p>A multipurpose app to help improve <br /> musicianship skills! </p>
                            </div>

                            <div className='mt-[3rem] mb-[1.5rem] hidden lg:flex'>
                                <a href='https://apps.apple.com/us/app/neireez-music-application/id1668434011' className='w-[33.333%]'>
                                    <img className='h-full' src={AppStor} />
                                </a>
                                
                                <a href='https://play.google.com/store/apps/details?id=ir.neireez.app' className='w-[33.333%] mx-[1rem]'>
                                    <img className='h-full' src={GooglePlay} />
                                </a>

                                <a href='http://cafebazaar.ir/app/?id=ir.neireez.app&ref=share' className='w-[33.333%]'>
                                    <img className='h-full' src={bazar} />
                                </a>
                            </div>

                            <div className='flex justify-center my-[1.5rem] flex lg:hidden'>
                                <Link to='/about-us' className='bg-[#C3DCE3] text-[#2B788B] font-semibold py-[0.6rem] px-[1rem] rounded-full'>
                                    <span>About Neireez</span>
                                </Link>
                            </div>

                            <div className='flex justify-center'>
                                <div className='flex flex-col justify-center items-center border-r-[2px] border-[#E0E0E0] pr-[2rem] mr-[2rem]'>
                                    <div className='flex justify-center items-center text-[2.5rem] font-[900]'>
                                        <svg className='w-[30px] lg:w-[40px]' width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4528 18.3666H20.6445H21.0735C24.3543 18.3875 31.8517 18.7127 31.8517 23.7013C31.8517 28.6554 24.6158 28.9784 21.1264 29H19.8313C16.5505 28.9791 9.05165 28.654 9.05165 23.6732C9.05165 18.7127 16.5505 18.389 19.8313 18.3681H20.2603L20.4528 18.3666ZM20.4528 20.8682C16.4124 20.8682 11.6007 21.3548 11.6007 23.6732C11.6007 25.939 16.1274 26.4689 20.0833 26.4985H20.4506C24.4909 26.4985 29.3011 26.0133 29.3011 23.6999C29.3026 21.3606 24.4902 20.8682 20.4528 20.8682ZM33.9696 17.6897C38.087 18.2953 38.9524 20.1927 38.9524 21.6785C38.9524 22.5854 38.5851 24.2413 36.1609 25.1504C36.0158 25.2041 35.862 25.2317 35.7069 25.2318C35.4086 25.2322 35.1197 25.1299 34.8904 24.9427C34.661 24.7555 34.5059 24.4954 34.4519 24.2075C34.3979 23.9196 34.4485 23.6223 34.5948 23.3673C34.7412 23.1122 34.9741 22.9156 35.2529 22.8117C36.4055 22.3828 36.4055 21.9063 36.4055 21.6792C36.4055 20.9489 35.4586 20.4385 33.5934 20.1653C33.4258 20.1432 33.2642 20.0886 33.1183 20.0047C32.9723 19.9208 32.8448 19.8092 32.7432 19.6765C32.6416 19.5437 32.568 19.3924 32.5265 19.2315C32.4851 19.0705 32.4767 18.9031 32.5018 18.7389C32.527 18.5747 32.5851 18.4171 32.673 18.2752C32.7608 18.1333 32.8765 18.01 33.0134 17.9124C33.1503 17.8148 33.3056 17.7449 33.4702 17.7068C33.6349 17.6687 33.8056 17.6631 33.9725 17.6904L33.9696 17.6897ZM8.38609 18.7408C8.43601 19.0692 8.35111 19.4037 8.15003 19.6707C7.94896 19.9378 7.64813 20.1157 7.31356 20.1653C5.44766 20.4385 4.50148 20.9489 4.50148 21.6792C4.50148 21.9077 4.50148 22.3814 5.65555 22.8132C5.93439 22.9171 6.16727 23.1137 6.31363 23.3687C6.46 23.6237 6.51059 23.9211 6.45659 24.2089C6.40258 24.4968 6.24742 24.757 6.0181 24.9441C5.78878 25.1313 5.49983 25.2336 5.20156 25.2333C5.04647 25.2331 4.89268 25.2055 4.74758 25.1518C2.3197 24.2406 1.95239 22.5847 1.95239 21.6792C1.95239 20.1949 2.81703 18.2953 6.93671 17.6904C7.27049 17.6434 7.60972 17.7272 7.88098 17.9238C8.15224 18.1204 8.3337 18.4139 8.38609 18.7408ZM20.4528 1C22.512 1 24.4869 1.80278 25.943 3.23173C27.3992 4.66069 28.2172 6.59877 28.2172 8.61962C28.2172 10.6405 27.3992 12.5785 25.943 14.0075C24.4869 15.4365 22.512 16.2392 20.4528 16.2392H20.4072C19.3906 16.2358 18.3845 16.0359 17.4466 15.6509C16.5087 15.2658 15.6573 14.7032 14.941 13.9952C14.2247 13.2872 13.6576 12.4476 13.272 11.5245C12.8864 10.6013 12.69 9.61263 12.6938 8.61493C12.6969 6.59639 13.5154 4.66138 14.9698 3.23399C16.4241 1.80659 18.3959 1.00324 20.4528 1ZM20.4528 3.50155C19.0698 3.50269 17.7439 4.04232 16.766 5.00197C15.7881 5.96161 15.2382 7.26284 15.237 8.61998C15.2337 9.28938 15.3648 9.95286 15.6229 10.5725C15.881 11.1921 16.2611 11.7557 16.7413 12.2311C17.2216 12.7065 17.7926 13.0843 18.4217 13.3429C19.0509 13.6016 19.7258 13.736 20.408 13.7384L20.4506 14.9892V13.7377C21.8339 13.7377 23.1605 13.1984 24.1386 12.2385C25.1168 11.2786 25.6663 9.97675 25.6663 8.61926C25.6663 7.26177 25.1168 5.95987 24.1386 4.99998C23.1605 4.04009 21.8339 3.50083 20.4506 3.50083L20.4528 3.50155ZM30.9701 2.63646C32.4227 2.87051 33.7417 3.60779 34.6877 4.71453C35.6338 5.82127 36.1442 7.22414 36.1265 8.66861C36.1087 10.1131 35.5639 11.5035 34.5909 12.5875C33.6179 13.6715 32.2811 14.3773 30.8232 14.5768C30.7646 14.5848 30.7054 14.5886 30.6462 14.5884C30.3229 14.5889 30.0116 14.4689 29.7751 14.2526C29.5386 14.0364 29.3947 13.74 29.3725 13.4236C29.3503 13.1071 29.4514 12.7942 29.6554 12.5482C29.8594 12.3021 30.1511 12.1413 30.4713 12.0984C31.3242 11.9798 32.1056 11.5655 32.6741 10.9304C33.2425 10.2954 33.5605 9.48154 33.5703 8.6363C33.5802 7.79107 33.2813 6.97031 32.7278 6.32264C32.1743 5.67498 31.4027 5.24322 30.5529 5.10556C30.3877 5.07886 30.2295 5.0205 30.0874 4.93382C29.9452 4.84713 29.8218 4.73381 29.7243 4.60032C29.6267 4.46684 29.5569 4.31581 29.5189 4.15585C29.4808 3.9959 29.4752 3.83015 29.5024 3.66807C29.5296 3.506 29.5891 3.35077 29.6774 3.21124C29.7657 3.07172 29.8812 2.95064 30.0172 2.85491C30.1533 2.75919 30.3072 2.69069 30.4702 2.65333C30.6332 2.61597 30.8021 2.61048 30.9672 2.63718L30.9701 2.63646ZM11.4002 3.66735C11.4549 3.99466 11.3751 4.3299 11.1781 4.59944C10.9811 4.86898 10.6832 5.05076 10.3497 5.10484C9.49982 5.24234 8.72821 5.67394 8.17458 6.32149C7.62095 6.96904 7.3219 7.78973 7.33158 8.63496C7.34125 9.48019 7.65902 10.2941 8.22734 10.9293C8.79566 11.5644 9.57696 11.9789 10.4298 12.0976C10.75 12.1406 11.0417 12.3014 11.2457 12.5474C11.4497 12.7935 11.5508 13.1064 11.5286 13.4229C11.5064 13.7393 11.3625 14.0357 11.126 14.2519C10.8895 14.4682 10.5782 14.5882 10.2549 14.5876C10.1957 14.5879 10.1366 14.5841 10.0779 14.5761C8.62008 14.376 7.28366 13.6697 6.31109 12.5854C5.33852 11.501 4.79424 10.1105 4.777 8.66604C4.75976 7.22159 5.2707 5.81892 6.21712 4.71253C7.16354 3.60613 8.48274 2.86931 9.93538 2.63574C10.1007 2.60815 10.2699 2.61302 10.4333 2.65006C10.5967 2.68709 10.751 2.75557 10.8872 2.85151C11.0234 2.94745 11.1389 3.06896 11.227 3.209C11.315 3.34904 11.3739 3.50483 11.4002 3.66735Z" fill="#2B788B" stroke="#2B788B" stroke-width="2"/>
                                        </svg>

                                        <span className='ml-[0.5rem]'>20K</span>

                                        <span className='text-[#2B788B]'>+</span>
                                    </div>

                                    <div className='mt-[-0.5rem] text-[#585858]'>
                                        <span>Musicians</span>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <div className='flex justify-center items-center text-[2.5rem] font-[900]'>
                                        <svg className='w-[30px] lg:w-[40px]' width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.4524 1C24.1113 1 27.6881 2.08501 30.7304 4.11781C33.7727 6.15062 36.1439 9.03992 37.5442 12.4204C38.9444 15.8008 39.3107 19.5205 38.5969 23.1092C37.8831 26.6978 36.1211 29.9942 33.5338 32.5815C30.9466 35.1687 27.6502 36.9307 24.0616 37.6445C20.4729 38.3583 16.7532 37.992 13.3728 36.5918C9.99232 35.1915 7.10301 32.8204 5.0702 29.778C3.0374 26.7357 1.95239 23.1589 1.95239 19.5C1.95239 14.5935 3.9015 9.88795 7.37092 6.41852C10.8403 2.9491 15.5459 1 20.4524 1ZM25.9051 18.6588C25.6761 13.53 23.7913 8.61356 20.5331 4.64605L20.4538 4.55009L20.3746 4.64896C17.1166 8.61605 15.2319 13.532 15.0026 18.6603L25.9051 18.6588ZM4.49917 18.6588H12.4791C12.6979 13.2445 14.5845 8.03008 17.8809 3.72927C14.2812 4.31677 10.9908 6.118 8.55612 8.83381C6.12148 11.5496 4.68915 15.0166 4.497 18.6588H4.49917ZM36.4099 18.6588C36.2179 15.0168 34.7857 11.55 32.3514 8.83421C29.917 6.11843 26.627 4.31707 23.0275 3.72927C26.3238 8.03011 28.2105 13.2445 28.4293 18.6588H36.4099ZM15.0505 21.1816C15.4419 26.0128 17.2997 30.6092 20.3753 34.3554L20.4546 34.4514L20.5338 34.3525C23.6086 30.6072 25.4663 26.0122 25.8586 21.1823L15.0505 21.1816ZM12.5212 21.1816H4.56243C4.932 24.6645 6.43525 27.9295 8.84109 30.4749C11.2469 33.0202 14.4222 34.7049 17.8787 35.27C17.1922 34.3731 16.5634 33.4333 15.9964 32.4564C13.9865 29.0152 12.7966 25.1571 12.519 21.1816H12.5212ZM28.3872 21.1816C28.1102 25.1573 26.92 29.0156 24.9091 32.4564C24.3433 33.4336 23.7153 34.3734 23.029 35.27C26.4844 34.7034 29.6583 33.0181 32.0631 30.4729C34.468 27.9278 35.9708 24.6636 36.3409 21.1816H28.3872Z" fill="#2B788B" stroke="#2B788B" stroke-width="2"/>
                                        </svg>

                                        <span className='ml-[0.5rem]'>18</span>

                                        <span className='text-[#2B788B]'>+</span>
                                    </div>

                                    <div className='mt-[-0.5rem] text-[#585858] font-semibold'>
                                        <span>Countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='px-[3rem] lg:p-0 lg:w-[50%] block'>
                            <img className='w-full' src={sec1} />
                        </div>

                        <div className='flex lg:hidden'>
                            <a href='https://apps.apple.com/us/app/neireez-music-application/id1668434011' className='w-[33.333%]'>
                                <img className='h-full' src={AppStor} />
                            </a>
                            
                            <a href='https://play.google.com/store/apps/details?id=ir.neireez.app' className='w-[33.333%] mx-[1rem]'>
                                <img className='h-full' src={GooglePlay} />
                            </a>

                            <a href='http://cafebazaar.ir/app/?id=ir.neireez.app&ref=share' className='w-[33.333%]'>
                                <img className='h-full' src={bazar} />
                            </a>
                        </div>
                    </section>
                </section>

                <section className='flex justify-center items-center'>
                    <section className='w-[100%] lg:w-[70%] p-[2rem] flex flex-col lg:flex-row p-[2rem] lg:py-[5.8rem]'>
                        <div className='w-[100%] lg:w-[50%] mb-[2rem] lg:mb-0'>
                            <img className='w-full' src={sec2} />
                        </div>

                        <div className='w-[100%] lg:w-[50%] lg:ml-[3rem] flex flex-col justify-center'>
                            <div className='mb-[1rem]'>
                                <h3 className='text-5xl font-bold text-center lg:text-left'>
                                    Practice with a capable, virtual Companion 
                                </h3>
                            </div>

                            <div className='text-[#757575] font-semibold text-center lg:text-left'>
                                <p>Various companion instruments for <br /> beginners and professionals</p>
                            </div>

                            <div className='flex justify-center lg:justify-start mt-[3rem]'>
                                <div className='bg-[#F2D4DC] relative w-[8rem] h-[7rem] rounded-[8px] p-[1.2rem] flex flex-col justify-center items-center'>
                                    <div className='absolute top-[-1.5rem]'>
                                        <img src={sec4} />
                                    </div>

                                    <div className='text-[#945069] font-[700] absolute bottom-[0.5rem]'>
                                        <span>Western</span>
                                    </div>
                                </div>

                                <div className='bg-[#C3DCE3] relative ml-[1rem] w-[10.75rem] h-[7rem] rounded-[8px] p-[1.2rem] flex flex-col justify-center items-center'>
                                    <div className='absolute top-[-1.5rem]'>
                                        <img src={sec5} />
                                    </div>

                                    <div className='text-[#945069] font-[700] absolute bottom-[0.5rem]'>
                                        <span>Eastern</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className='bg-[#F6F5F4] flex justify-center items-center'>
                    <section className='w-[100%] lg:w-[70%] flex flex-col-reverse lg:flex-row p-[2rem] lg:py-[5.8rem]'>
                        <div className='w-[100%] lg:w-[50%] lg:mr-[3rem] flex flex-col justify-center'>
                            <div className='mb-[1rem] text-center lg:text-left'>
                                <h3 className='text-5xl font-bold'>
                                Manage your digital  content with Xplore
                                </h3>
                            </div>

                            <div className='text-[#757575] font-semibold text-center lg:text-left'>
                                <p>A could-based file manager designed for <br/> musicians</p>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[50%] px-[2rem]'>
                            <img className='w-full' src={sec6} />
                        </div>
                    </section>
                </section>

                <section className='flex justify-center items-center'>
                    <section className='w-[100%] lg:w-[70%] p-[2rem] flex flex-col lg:flex-row p-[2rem] lg:py-[5.8rem]'>
                        <div className='w-[100%] lg:w-[50%]'>
                            <img className='w-full' src={sec7} />
                        </div>

                        <div className='w-[100%] lg:w-[50%] lg:ml-[3rem] text-center lg:text-left flex flex-col justify-center'>
                            <div className='mb-[1rem]'>
                                <h3 className='text-5xl font-bold'>
                                    A powerful Toolkit for everyday practice 
                                </h3>
                            </div>

                            <div className='text-[#757575] font-semibold text-center lg:text-left'>
                                <p>Unlock musical excellence with a variety of useful tools, e.g., metronome, tuner, note trainer, etc. </p>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
};

export default Home;