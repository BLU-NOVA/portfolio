"use client"

import React, { useState } from 'react';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        telephone: '',
        date: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="p-6 bg-white  rounded-lg mt-20 sm:mx-36">
            <h1 className="text-2xl font-bold mb-6 text-black">Contact Us</h1>
            <div className="flex flex-col sm:flex-row mb-6 gap-4">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 bg-gray-100 rounded-lg p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="johndoe254@gmail.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                                    Telephone No.
                                </label>
                                <input
                                    className=" appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-00 leading-tight focus:outline-none focus:shadow-outline"
                                    id="telephone"
                                    type="tel"
                                    placeholder="+254 (700) 000000"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows={4}
                                placeholder="Enter your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <div className="mb-4">
                        <div className="flex items-center mb-2 border rounded-xl p-10">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <p>P.O BOX 110-10303 Wang'uru, Kirinyaga</p>
                        </div>
                        <div className="flex items-center mb-2 border rounded-xl p-10">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <p>+ (254) 712 167784</p>
                        </div>
                        <div className="flex items-center border rounded-xl p-10">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <p>example254@blunova.co.ke</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;