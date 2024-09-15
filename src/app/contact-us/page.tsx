"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronRight, Send, Phone, Mail } from 'lucide-react';
import { ReCAPTCHA } from 'react-google-recaptcha';


const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        telephone: '',
        date: '',
        message: '',
    });
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                'service_tmwnld1',
                'template_er2yjqt',
                { ...formData, 'g-recaptcha-response': recaptchaToken },
                '3SJqd6jqNgsKWBKXX'
            );
            setSubmitStatus('success');
            setFormData({
                fullName: '',
                email: '',
                telephone: '',
                date: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100 to-white">
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1440 800"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.7 }} />
                        <stop offset="100%" style={{ stopColor: '#93C5FD', stopOpacity: 0.3 }} />
                    </linearGradient>
                </defs>
                
                <path fill="url(#grad1)" d="M0 0h1440v800H0z" />
                
                <path 
                    fill="#FFFFFF" 
                    fillOpacity="0.3"
                    d="M0,160 C320,300 520,0 720,100 C920,200 1120,80 1440,80 V800 H0 V160 Z" 
                />
                <path 
                    fill="#FFFFFF" 
                    fillOpacity="0.4"
                    d="M0,320 C320,400 520,200 720,300 C920,400 1120,280 1440,320 V800 H0 V320 Z" 
                />
            </svg>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 mt-20 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-36">
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">Let&apos;s Connect!</h1>
                    <p className="text-lg text-gray-600 mb-8">Ready to turn your ideas into reality? We&apos;re just a message away from creating something extraordinary together!</p>
                    <div className="flex flex-col lg:flex-row mb-6 gap-8">
                        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/2">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fullName">
                                            Full Name
                                        </label>
                                        <input
                                            className="appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
                                            id="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
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
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="w-full sm:w-1/2">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="telephone">
                                            Telephone No.
                                        </label>
                                        <input
                                            className="appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
                                            id="telephone"
                                            type="tel"
                                            placeholder="+254 (700) 000000"
                                            name="telephone"
                                            value={formData.telephone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
                                            Preferred Contact Date
                                        </label>
                                        <input
                                            className="appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
                                            id="date"
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        className="appearance-none border-2 border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
                                        id="message"
                                        rows={4}
                                        placeholder="Tell us about your project or idea..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <ReCAPTCHA
                sitekey="6LcNv0QqAAAAADmJfv-mODy_OlyWXnZXy8DPNJMM" 
                onChange={(token:any) => setRecaptchaToken(token)}
            />
                                <div className="flex items-center justify-between">
                                    <button
                                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 flex items-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-4 w-4" />
                                    </button>
                                    {submitStatus === 'success' && (
                                        <p className="text-green-500 font-semibold">Message sent successfully!</p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="text-red-500 font-semibold">Error sending message. Please try again.</p>
                                    )}
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/2 px-3">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4 text-blue-600">Let&apos;s Create Something Amazing</h2>
                                <p className="text-gray-600 mb-6">Have an idea that needs bringing to life? We&apos;re here to turn your vision into reality. Our team of experts is ready to collaborate with you on your next big project.</p>
                                <div className="space-y-4">
                                    <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm transition duration-300 hover:bg-blue-100">
                                        <div className="bg-blue-500 p-2 rounded-full mr-4">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-800">Give us a call</h3>
                                            <p className="text-blue-600">+ (254)7 465-465-13</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm transition duration-300 hover:bg-blue-100">
                                        <div className="bg-blue-500 p-2 rounded-full mr-4">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-800">Send us an email</h3>
                                            <p className="text-blue-600">contact@blunova.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <ChevronRight className="h-5 w-5 mr-2" />
                                        <span>Expert team with years of experience</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ChevronRight className="h-5 w-5 mr-2" />
                                        <span>Tailored solutions for your unique needs</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ChevronRight className="h-5 w-5 mr-2" />
                                        <span>Cutting-edge technology and innovation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <ChevronRight className="h-5 w-5 mr-2" />
                                        <span>Dedicated support throughout the project</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;