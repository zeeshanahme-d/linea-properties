import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaShieldAlt, FaBell } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs"
import { HiOutlineArrowSmRight } from "react-icons/hi";

const features = [
    {
        title: "Verified Properties",
        description: "Every listing checked & verified",
        icon: IoCheckmarkCircleSharp,
    },
    {
        title: "Secure Escrow",
        description: "Your money is protected",
        icon: FaShieldAlt,
    },
    {
        title: "Trusted Agents",
        description: "Connect with verified landlords",
        icon: BsPersonCheckFill,
    },
    {
        title: "Smart Alerts",
        description: "Get notified of new listings",
        icon: FaBell,
    },
];


const About: React.FC = () => {
    return (
        <section className="code-section bg-white py-16 sm:py-24 lg:py-32" id="s3ld85c" data-update-id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* <!-- Image Side --> */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img src="/images/about-womens.avif" alt="Traditional African women, group and studio for face, jewelry or beads necklace in clothes by brown background. Black people, model and indigenous fashion for friends, culture or portrait for kwanzaa" className="w-full h-auto" />

                            {/* <!-- Overlay Badge --> */}
                            <div className="absolute top-6 left-6 bg-white rounded-xl shadow-xl p-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-dark">Built in Cameroon</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Decorative Element --> */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-full opacity-20 blur-3xl -z-10"></div>
                    </div>

                    {/* <!-- Content Side --> */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-block bg-bg-base text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            About Linea
                        </div>

                        <h2 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                            Simplifying Real Estate for
                            <span className="text-primary"> Africans</span>
                        </h2>

                        <p className="text-lg text-dark mb-6 leading-relaxed">
                            Linea is a Cameroon-built real estate app designed to simplify how
                            Africans find and list verified properties. Whether you're searching
                            for an apartment in Douala, land in Yaoundé, or a commercial space in
                            Buea — Linea connects you directly with trusted agents and landlords.
                        </p>

                        <p className="text-xl font-semibold text-dark mb-8 italic">
                            Built in Cameroon. Made for Africa.
                        </p>

                        {/* <!-- Key Features --> */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="shrink-0 w-10 h-10 bg-bg-base rounded-lg flex items-center justify-center">
                                            <Icon size={24} className="text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-dark mb-1">{feature.title}</h3>
                                            <p className="text-sm text-dark">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a href="/about" className="inline-flex items-center gap-1 bg-primary text-light px-8 py-4 rounded-lg hover:bg-accent-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Learn More About Us
                            <HiOutlineArrowSmRight size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;