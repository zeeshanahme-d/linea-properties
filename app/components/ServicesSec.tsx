import React, { JSX } from 'react';

import { FaShieldAlt, FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
    gradient: string;
    className?: string;
}

const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "Property Search",
        description:
            "Browse verified listings for rent or sale. Filter by location, price, and property type to find your perfect match.",
        link: "/services",
        icon: <IoSearch size={32} className="text-white" />,
        gradient: "linear-gradient(to bottom right,#DC6648 , #F9A385)",
        className: "",
    },
    {
        id: 2,
        title: "Escrow Protection",
        description:
            "Your money is safe until you confirm the property. No more worries about fraud or scams.",
        link: "/services",
        icon: <FaShieldAlt size={32} className="text-white" />,
        gradient: "linear-gradient(to bottom right, #A66150 , #EDA693)",
        className: "",
    },
    {
        id: 3,
        title: "Locator & Profiles",
        description:
            "Connect directly with trusted agents and landlords. View verified profiles and ratings before you reach out.",
        link: "/services",
        icon: <FaLocationDot size={32} className="text-white" />,
        gradient: "linear-gradient(to bottom right, #DC6648 , #A66150)",
        className: "",
    },
    {
        id: 4,
        title: "Smart Alerts",
        description:
            "Get notifications for new listings in your area. Never miss an opportunity to find your dream property.",
        link: "/services",
        icon: <FaBell size={32} className="text-white" />,
        gradient: "linear-gradient(to bottom right, #EDA693 , #F9A385)",
        className: "",
    },
];


const Services: React.FC = () => {
    return (
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(to bottom right, #FDE9E5 , #fff)" }}>
            {/* <!-- Decorative Background --> */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-light rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* <!-- Section Header --> */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                        Our Services
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6">
                        Everything You Need in
                        <span className="text-primary">One App</span>
                    </h2>
                    <p className="text-lg text-gray max-w-3xl mx-auto">
                        Linea brings together all the tools you need to find, verify, and secure
                        your next property with confidence.
                    </p>
                </div>

                {/* <!-- Services Grid --> */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-white rounded-2xl p-6 xl:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border-base ${item.className}`}
                        >
                            <div
                                style={{ backgroundImage: item.gradient }}
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                            >
                                {item.icon}
                            </div>

                            <h3 className="font-heading text-xl font-bold text-dark mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <a
                                href={item.link}
                                className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
                            >
                                Learn More{" "}
                                <HiOutlineArrowSmRight size={24} className="text-primary" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* <!-- Bottom CTA --> */}
                <div className="text-center mt-16">
                    <a href="/services" className="inline-flex items-center gap-1 bg-primary text-light px-10 py-5 rounded-lg hover:bg-primary-hover transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                        Explore All Services
                        <HiOutlineArrowSmRight size={32} className='text-white' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services;