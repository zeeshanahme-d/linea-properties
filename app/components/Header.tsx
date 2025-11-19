"use client"
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Hamburger from "hamburger-react";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            id="global-header"
            className="w-full h-auto bg-light"
        >
            <Wrapper>
                <div className="flex justify-between items-center h-28">
                    {/* Logo */}
                    <a href="/" className="shrink-0">
                        <Image
                            src="/images/dashboard-logo.svg"
                            alt="Linea Properties"
                            width={100}
                            height={100}
                            className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#about"
                            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                        >
                            About Us
                        </a>
                        <a
                            href="#services"
                            className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="#contactus"
                            className="bg-primary text-center font-semibold text-light px-6 py-3 rounded-lg hover:bg-accent-dark transition-all duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                    >
                        <Hamburger rounded size={30} duration={0.3} easing="ease-in-out" toggled={menuOpen} toggle={setMenuOpen} />
                    </button>

                </div>

            </Wrapper>
            <div className='relative'>
                <div className={`bg-light w-full py-5 px-4 sm:px-6 transition-all duration-500  ${menuOpen ? "block" : "hidden pointer-events-none"}`}>
                    <div className="flex flex-col space-y-5">
                        <a
                            href="#about"
                            className="text-dark hover:text-primary transition-colors duration-300 font-medium py-1"
                        >
                            About Us
                        </a>
                        <a
                            href="#services"
                            className="text-dark hover:text-primary transition-colors duration-300 font-medium py-1"
                        >
                            Services
                        </a>
                        <a
                            href="#contactus"
                            className="bg-primary font-semibold text-center text-light px-6 py-3 rounded-lg hover:bg-accent-dark transition-all duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
