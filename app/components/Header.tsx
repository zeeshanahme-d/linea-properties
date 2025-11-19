"use client"
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Hamburger from "hamburger-react";
import { smoothScroll } from "../lib/scrollToElement";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            id="home"
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
                        <button
                            onClick={() => smoothScroll("about")}
                            className="cursor-pointer text-dark hover:text-primary transition-colors duration-300 font-medium"
                        >
                            About
                        </button>
                        <button
                            onClick={() => smoothScroll("services")}
                            className="cursor-pointer text-dark hover:text-primary transition-colors duration-300 font-medium"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => smoothScroll("contact-us")}
                            className="cursor-pointer bg-primary text-center font-semibold text-light px-6 py-3 rounded-lg hover:bg-accent-dark transition-all duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </button>
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
                        <button
                            onClick={() => { setMenuOpen(false); smoothScroll("contact-us") }}
                            className="text-dark hover:text-primary cursor-pointer transition-colors duration-300 font-medium py-1"
                        >
                            About Us
                        </button>
                        <button
                            onClick={() => { setMenuOpen(false); smoothScroll("contact-us") }}
                            className="text-dark hover:text-primary cursor-pointer transition-colors duration-300 font-medium py-1"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => { setMenuOpen(false); smoothScroll("contact-us") }}
                            className="bg-primary cursor-pointer font-semibold text-center text-light px-6 py-3 rounded-lg hover:bg-accent-dark transition-all duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
