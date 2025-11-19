"use client"
import React from 'react';
import Wrapper from '../components/Wrapper';
//icons
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { FaLinkedin, FaFacebookF, FaTiktok, FaLock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";




const Contact: React.FC = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        console.log(data);
    };

    return (
        <section className="code-section bg-white py-16 sm:py-24 lg:py-32" id='contact-us'>
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* <!-- Left Content --> */}
                    <div>
                        <div className="inline-block bg-bg-base text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            Get In Touch
                        </div>

                        <h2 className="font-['Poppins'] text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                            Press &amp; Media
                            <span className="text-primary"> Inquiries</span>
                        </h2>

                        <p className="text-lg text-gray mb-8 leading-relaxed">
                            For media coverage, partnership opportunities, or interviews, reach
                            out to our Linea team below. We're excited to share our story of
                            innovation and growth in African real estate.
                        </p>

                        {/* <!-- Contact Info Cards --> */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 bg-bg-base p-4 md:p-6 rounded-xl">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                    <FaLocationDot size={28} className='text-primary' />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-1">
                                        Location
                                    </h3>
                                    <p className="text-gray">Douala, Cameroon</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 bg-bg-base p-4 md:p-6 rounded-xl">
                                <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                    <GoClockFill size={28} className='text-primary' />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-dark mb-1">
                                        Response Time
                                    </h3>
                                    <p className="text-gray">
                                        We typically respond within 24-48 hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Social Links --> */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray font-semibold">Follow Us:</span>
                            <a href="#" target="_blank" className="group w-12 h-12 bg-bg-base hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <FaLinkedin size={24} className='text-primary group-hover:text-white transition-all duration-300' />
                            </a>
                            <a href="#" target="_blank" className="group w-12 h-12 bg-bg-base hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <FaFacebookF size={24} className='text-primary group-hover:text-white transition-all duration-300' />
                            </a>
                            <a href="#" target="_blank" className="group w-12 h-12 bg-bg-base hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                                <FaTiktok size={24} className='text-primary group-hover:text-white transition-all duration-300' />
                            </a>
                        </div>
                    </div>

                    {/* <!-- Right Content - Contact Form --> */}
                    <div className="rounded-2xl p-5 md:p-8 sm:p-10 shadow-xl" style={{ backgroundImage: "linear-gradient(to bottom right, #FDE9E5 , #FAD3C8)" }}>
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">Name</label>
                                <input type="text" id="name" name="name" required={true} className="w-full px-4 py-3 bg-white border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-dark" placeholder="Your full name" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Email</label>
                                <input type="email" id="email" name="email" required={true} className="w-full px-4 py-3 bg-white border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-dark" placeholder="your@email.com" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} required={true} className="w-full px-4 py-3 bg-white border-2 border-border-light rounded-lg focus:border-primary focus:outline-none transition-colors text-dark resize-none" placeholder="Tell us about your inquiry..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-light px-8 py-4 rounded-lg cursor-pointer hover:bg-primary-hover transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Send Message
                                <IoIosSend size={28} className='text-white' />
                            </button>

                            <p className="text-sm text-gray text-center flex justify-center items-start gap-1">
                                <FaLock size={16} className='text-primary mt-0.5' />
                                Information is secure and will not be shared
                            </p>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Contact;