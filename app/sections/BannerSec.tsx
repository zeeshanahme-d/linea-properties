import React from 'react'
import Wrapper from '../components/Wrapper';
import Image from 'next/image';
//icons
import { FaApple, FaLock } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdVerifiedUser, MdHome, MdGroups2 } from "react-icons/md";




const Banner: React.FC = () => {
    return (
        <section className='relative'>
            <div className='relative pb-16 pt-20 sm:pb-24 lg:pb-32 overflow-hidden bg-accent-light' style={{ backgroundImage: "linear-gradient(to bottom right, #FDE9E5 , #F9F9F9)" }}>
                <div className="absolute top-20 right-10 w-72 h-72 bg-accent-light rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full opacity-20 blur-3xl"></div>
                <Wrapper>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* <!-- Left Content --> */}
                        <div className="text-center lg:text-left">
                            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
                                Find Your Next Home with
                                <span className="text-primary"> Linea</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray mb-8 max-w-xl mx-auto lg:mx-0">
                                Apartments, houses, land, and commercial properties — all verified,
                                all in one app.
                            </p>

                            {/* <!-- Download Buttons --> */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <a href="#" className="inline-flex items-center gap-x-3 justify-center bg-dark text-light px-6 py-4 rounded-lg hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group">
                                    <IoLogoGooglePlaystore size={28} />
                                    <div className="text-left">
                                        <div className="text-xs">GET IT ON</div>
                                        <div className="text-lg font-semibold">Google Play</div>
                                    </div>
                                </a>
                                <a href="#" className="inline-flex items-center gap-x-3 justify-center bg-dark text-light px-6 py-4 rounded-lg hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group">
                                    <FaApple size={28} />
                                    <div className="text-left">
                                        <div className="text-xs">DOWNLOAD ON THE</div>
                                        <div className="text-lg font-semibold">App Store</div>
                                    </div>
                                </a>
                            </div>

                            {/* <!-- Trust Signal --> */}
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray">
                                <MdVerifiedUser size={24} className='text-primary' />
                                <span className="text-sm">100% Verified Properties</span>
                                <span className="mx-2">•</span>
                                <FaLock size={24} className='text-primary' />
                                <span className="text-sm">Secure Escrow Protection</span>
                            </div>
                        </div>

                        {/* <!-- Right Content - Phone Mockup --> */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative z-10">
                                <div className="relative w-64 sm:w-80 lg:w-96 mx-auto transform hover:scale-105 transition-transform duration-500">
                                    {/* <!-- Phone Frame --> */}
                                    <div className="relative bg-dark rounded-[2.5rem] p-3 shadow-2xl">
                                        <div className="bg-white rounded-4xl overflow-hidden">
                                            <Image width={100} height={100} src="/images/bannersec-women.avif" alt="A fashionable African woman in a vibrant dress checks her phone outdoors.  The urban setting is blurred, focusing attention on her." className="w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Floating Feature Cards --> */}
                                <div className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-transform hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-bg-base p-3 rounded-lg">
                                            <MdHome size={32} className='text-primary' />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray">
                                                New Listings
                                            </div>
                                            <div className="text-lg font-bold text-dark">
                                                500+
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-xl p-4 transform hover:scale-110 transition-transform hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-bg-base p-3 rounded-lg">
                                            <MdGroups2 size={32} className='text-primary' />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray">
                                                Active Users
                                            </div>
                                            <div className="text-lg font-bold text-dark">
                                                10K+
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="absolute -bottom-1 xl:-bottom-16 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0,64 C360,16 720,16 1080,48 C1200,56 1320,72 1440,80 L1440,120 L0,120 Z" fill="white"></path>
                </svg>
            </div>
        </section>
    )
}

export default Banner;
