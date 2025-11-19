"use client"
import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { smoothScroll } from "../lib/scrollToElement";
//icons
import { FaLinkedin, FaFacebookF, FaTiktok, FaApple, } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Footer: React.FC = () => {
    return (
        <footer className="bg-bg-dark text-light pt-16 pb-6">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-4  gap-8 mb-10">
                    {/* Logo + Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                width={100}
                                height={100}
                                src="/images/dashboard-logo.svg"
                                alt="Linea Logo"
                                className="h-32 w-auto"
                            />
                        </div>
                        <p className="text-gray mb-6 leading-relaxed">
                            Africa&apos;s most trusted real estate app. Find verified properties
                            across Cameroon with confidence and security.
                        </p>
                        <p className="text-white text-base flex items-center gap-1">
                            <FaLocationDot size={16} className="text-primary" /> Douala, Cameroon
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-400 text-base">
                            <li>
                                <button
                                    onClick={() => smoothScroll("home")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => smoothScroll("about")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => smoothScroll("services")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1"
                                >
                                    <MdKeyboardArrowRight size={20} />
                                    Services
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => smoothScroll("home")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    Blog
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-heading text-lg font-bold mb-6">Resources</h3>
                        <ul className="space-y-3 text-gray-400 text-base">
                            <li>
                                <button
                                    onClick={() => smoothScroll("contact-us")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    Contact
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => smoothScroll("home")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => smoothScroll("home")}
                                    className="text-gray hover:text-primary cursor-pointer transition-colors duration-300 flex items-center gap-1">
                                    <MdKeyboardArrowRight size={20} />
                                    Legal
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Download App + Social */}
                    <div className="space-y-4">
                        <h3 className="font-heading text-lg font-bold mb-6">Download App</h3>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="inline-flex max-w-72 items-center gap-x-3 justify-start bg-[#ffffff1a] text-light px-4 py-2 rounded-lg hover:bg-[#fff3] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group">
                                <IoLogoGooglePlaystore size={28} className="text-primary" />
                                <div className="text-left">
                                    <div className="text-xs text-gray">GET IT ON</div>
                                    <div className="text-lg font-semibold">Google Play</div>
                                </div>
                            </a>
                            <a href="#" className="inline-flex max-w-72 items-center gap-x-3 justify-start bg-[#ffffff1a] text-light px-4 py-2 rounded-lg hover:bg-[#fff3] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group">
                                <FaApple size={28} className="text-primary" />
                                <div className="text-left">
                                    <div className="text-xs text-gray">DOWNLOAD ON THE</div>
                                    <div className="text-lg font-semibold">App Store</div>
                                </div>
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href="#linkedin"
                                className="bg-[#ffffff1a] p-2.5 rounded-lg hover:bg-primary duration-300 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="#facebook"
                                className="bg-[#ffffff1a] p-2.5 rounded-lg hover:bg-primary duration-300 transition-colors"
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a
                                href="#tiktok"
                                className="bg-[#ffffff1a] p-2.5 rounded-lg hover:bg-primary duration-300 transition-colors"
                            >
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex-col items-center gap-2.5 sm:flex-row text-gray text-sm flex justify-between">
                    <span>© {new Date().getFullYear()} Linea Properties. All Rights Reserved.</span>
                    <span>
                        Built in Cameroon &bull; Made for Africa
                    </span>
                </div>
            </Wrapper>

        </footer>
    );
};

export default Footer;
