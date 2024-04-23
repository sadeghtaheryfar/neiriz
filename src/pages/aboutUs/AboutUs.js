import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <main id='main-home'>
                <section className='flex justify-center items-center p-[2rem]'>
                    <section className='w-[100%] lg:w-[60%] bg-white p-[2rem] shadow-[0_0_25px_4px_#34292714] rounded-[0.5rem] text-[#757575]'>
                        <h2 className='font-bold text-[2rem] mb-[1rem]'>About us</h2>

                        <p className='text-justify'>
                            Welcome to Neireez – the groundbreaking music application designed to empower musicians in their journey of learning and mastering music. At Neireez, we understand the challenges musicians face in their practice and learning sessions. That's why we've developed an app that not only streamlines the learning process but also enriches every practice session with innovative tools and features. Our mission at Neireez is simple: to provide musicians with the resources they need to excel in their craft. Whether you're a beginner seeking guidance or a seasoned musician looking to refine your skills, Neireez is your dedicated companion on this musical odyssey. Here's how Neireez revolutionizes your music learning experience: Xplore: Dive into a world of digital organization with Xplore, our cloud-based tool. Create customized folders for each instrument you're learning and meticulously organize your lessons with audio, video, documents, and more. With Xplore, your music content is always at your fingertips, neatly arranged and easily accessible. Companion: Elevate your practice sessions with Companion, our virtual percussionist. Choose your instrument, select a time signature, and explore a wide range of rhythmic patterns to practice with. With Companion by your side, you'll never practice alone – experience the joy of playing music anytime, anywhere. Tools: Equip yourself with essential tools for musicians, right at your fingertips. From a precise metronome to a handy sound meter and recorder, Neireez provides everything you need to fine-tune your skills and unleash your musical potential. Handbook: Delve into the fundamentals of music theory with our comprehensive electronic handbook. Whether you're interested in Western or Persian music theory, our handbook serves as your go-to resource for mastering the intricacies of music notation, scales, and more. At Neireez, we believe in providing value that extends beyond boundaries. That's why we offer a freemium model, giving you access to essential features at no cost. However, for those seeking premium benefits, we offer flexible subscription plans tailored to your needs. Unlock exclusive features such as access to all patterns in Companion, the ability to upload new content in Xplore, and customization options in the Metronome. Choose from our range of premium plans – whether it's a month, three months, six months, or a year – and enjoy uninterrupted access to premium features for the duration of your subscription. And with the option to extend your plan at any time, you're always in control of your musical journey. Join the Neireez community today and embark on a transformative musical experience. Whether you're a passionate beginner or a seasoned virtuoso, Neireez is your gateway to musical excellence. Let's create beautiful music together.
                        </p>
                    </section>
                </section>
            </main>
        </>
    );
};

export default AboutUs;