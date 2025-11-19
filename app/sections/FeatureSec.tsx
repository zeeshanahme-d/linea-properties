import React from 'react';
import Image from 'next/image';
//icons
import { FaApple, FaLock, FaDownload, FaKey, FaMapMarkedAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";



const Feature: React.FC = () => {
    return (
        <section className='relative'>
            <div className="pb-16 pt-20 sm:pb-24 lg:pb-32 overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom right, #DC6648 , #A66150)" }}>
                {/* <!-- Decorative Elements --> */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* <!-- Left Content --> */}
                        <div className="text-center lg:text-left">
                            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ">
                                Smart Living Starts
                                <span className="text-accent-light"> Here</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-white/90 mb-8">
                                Download Linea today and start finding your next home with confidence.
                                Join thousands of Cameroonians already using Africa's most trusted
                                real estate app.
                            </p>

                            {/* <!-- Download Buttons --> */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <a href="#" className="inline-flex gap-3 items-center justify-center bg-white text-dark px-5 py-4 rounded-lg hover:bg-bg-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
                                    <IoLogoGooglePlaystore size={28} className="text-primary" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray">GET IT ON</div>
                                        <div className="text-lg font-bold">Google Play</div>
                                    </div>
                                </a>
                                <a href="#" className="inline-flex items-center gap-3 justify-center bg-white text-dark px-5 py-4 rounded-lg hover:bg-bg-base transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group">
                                    <FaApple size={28} className="text-primary" />
                                    <div className="text-left">
                                        <div className="text-xs text-gray">
                                            DOWNLOAD ON THE
                                        </div>
                                        <div className="text-lg font-bold">App Store</div>
                                    </div>
                                </a>
                            </div>

                            {/* <!-- Trust Badges --> */}
                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <TiStarFullOutline size={24} className="text-[#fde047]" />
                                    <span className="text-white font-semibold">4.8/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <FaDownload size={18} className="text-white" />
                                    <span className="text-white font-semibold">10K+ Downloads</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <FaLock size={18} className="text-white" />
                                    <span className="text-white font-semibold">100% Secure</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Right Content - App Preview --> */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* <!-- Main Phone --> */}
                                <div className="relative z-20 transform hover:scale-105 transition-transform duration-500">
                                    <div className="w-64 sm:w-80 mx-auto bg-dark rounded-[2.5rem] p-3 shadow-2xl">
                                        <div className="bg-white rounded-4xl overflow-hidden">
                                            <Image width={100} height={100} src="/images/feature-section-womens.avif" alt="Two young beautiful African fashion models." className="w-full h-auto object-cover" />
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Floating Feature Icons --> */}
                                <div className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-2xl p-3 transform hover:rotate-6 transition-transform hidden sm:block z-10">
                                    <MdHome size={32} className="text-primary" />
                                </div>

                                <div className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-2xl p-3 transform hover:rotate-6 transition-transform hidden sm:block z-10">
                                    <FaKey size={32} className="text-primary" />
                                </div>

                                <div className="absolute -left-4 bottom-1/4 bg-white rounded-2xl shadow-2xl p-3 transform hover:rotate-6 transition-transform hidden sm:block z-10">
                                    <FaMapMarkedAlt size={32} className="text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Bottom Wave --> */}
            <div className="absolute -bottom-1 md:-bottom-6 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0,64 C360,16 720,16 1080,48 C1200,56 1320,72 1440,80 L1440,120 L0,120 Z" fill="white"></path>
                </svg>
            </div>
        </section>
    )
}


export default Feature;
