import React from 'react';
import { FaBolt, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import Logo from '../../../../Component/Logo/Logo';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Logo and Tagline */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Logo></Logo>
                    </div>
                    <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                        business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Navigation Menu */}
                <nav className="flex justify-center gap-8 mb-8 flex-wrap">
                    <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Services
                    </a>
                    <a href="#coverage" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Coverage
                    </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
                        About Us
                    </a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Pricing
                    </a>
                    <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Blog
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                        Contact
                    </a>
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-4">
                    <a
                        href="#linkedin"
                        className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="#twitter"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="w-5 h-5 text-black" />
                    </a>
                    <a
                        href="#facebook"
                        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="w-5 h-5" />
                    </a>
                    <a
                        href="#youtube"
                        className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        aria-label="YouTube"
                    >
                        <FaYoutube className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;