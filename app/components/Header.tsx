import React from "react";
import Image from "next/image";
import Wrapper from "./Wrapper";

const Header: React.FC = () => {
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
                    <nav className="hidden lg:flex items-center space-x-8">
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
                            href="#contact"
                            className="bg-primary font-semibold text-light px-6 py-3 rounded-lg hover:bg-accent-dark transition-all duration-300  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        data-landingsite-mobile-menu-toggle=""
                        className="lg:hidden text-dark-700 p-2 rounded-md hover:bg-light transition-colors"
                        aria-expanded="false"
                    >
                        <i className="fas fa-bars text-2xl" aria-hidden="true"></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    data-landingsite-mobile-menu=""
                    className="lg:hidden pb-4 hidden"
                >
                    <div className="flex flex-col space-y-4">
                        <a
                            href="#about"
                            className="text-dark hover:text-text-primary transition-colors duration-300 font-medium py-2"
                        >
                            About Us
                        </a>
                        <a
                            href="#services"
                            className="text-dark hover:text-text-primary transition-colors duration-300 font-medium py-2"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="bg-text-primary text-light px-6 py-3 rounded-lg hover:bg-primary-hover transition-all duration-300 font-semibold text-center"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
