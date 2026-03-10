import React from 'react';
import { Phone, MessageCircle, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo.png';
import mobile from '../../assets/mobile.png';
import googlePlay from '../../assets/googlePlay.png';

const Footer = () => {
    return (
        <footer className="bg-[#0a6644] text-white pt-[60px] px-5 pb-5 mt-auto">
            <div className="mx-auto flex flex-wrap justify-between gap-10 max-w-7xl">
                <div className="flex-1 min-w-[300px]">
                    <img src={logo} alt="Medivik Logo" className="w-[150px] mb-5" />
                    <p className="leading-relaxed text-sm text-white/90 mb-[15px]">Medivik.com is a pharmaceutical e-tail company with the main agenda of providing genuine medicine, surgical, medical devices and OTC products to the society. Medivik.com brings to you the comfort of ordering medicines and Over-the-Counter (OTC)</p>
                    <a href="#" className="text-[#ffb400] no-underline font-bold text-sm">Read More »</a>
                </div>

                <div className="flex-[0.5] min-w-[150px]">
                    <h3 className="text-lg mb-[25px] relative uppercase after:content-[''] after:absolute after:left-0 after:-bottom-[8px] after:w-[40px] after:h-[2px] after:bg-[#ffb400]">Quick Links</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />About Us</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />Contact Us</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />FAQ</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />Privacy Policy</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />Terms & Conditions</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />Return Policy</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400] flex items-center gap-2"><ChevronRight className="w-4 h-4" />IP Policy</a></li>
                    </ul>
                </div>
                <div className="flex-[0.5] min-w-[150px]">
                    <h3 className="text-lg mb-[25px] relative uppercase after:content-[''] after:absolute after:left-0 after:-bottom-[8px] after:w-[40px] after:h-[2px] after:bg-[#ffb400]">Contact With Us</h3>
                    <ul className="list-none p-0 m-0">
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400]">Call Us : +91 7300112474</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400]">Email-Id : info@medivik.com</a></li>
                        <li className="mb-3"><a href="#" className="text-white no-underline text-sm transition-colors duration-300 hover:text-[#ffb400]">Vendor : Singhal Traders</a></li>
                    </ul>
                </div>

                <div className="flex-[0.7] bg-[#0d8358] p-8 rounded-[20px] flex items-center justify-between gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-white/10 max-md:flex-col max-md:text-center w-full min-w-[320px]">
                    <div className="m-0 shrink-0">
                        <h2 className="text-[#ffb400] m-0 mb-3 text-[26px] whitespace-nowrap font-bold">Get Our App</h2>
                        <div className="flex flex-col gap-2.5 max-md:flex-row max-md:justify-center">
                            <img src={googlePlay} alt="Google Play" className="h-[45px] w-auto cursor-pointer transition-transform duration-200 hover:scale-105" />
                        </div>
                        <p className="text-[13px] my-5 text-white/90">Simplifying health,<br />one app at a time.</p>

                    </div>
                    <div className="mt-4 md:mt-0 shrink-0">
                        <img src={mobile} alt="App Preview" className="max-w-fit w-[230px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]" />
                    </div>
                </div>
            </div>

            <div className="mt-10 mx-auto pt-5 border-t border-white/10 flex justify-between items-center flex-wrap gap-5 max-w-7xl">
                <div className="flex gap-[15px]">
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><MessageCircle className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><Phone className="w-5 h-5" /></a>
                </div>
                <div className="text-[13px] text-white/70 text-center">
                    © {new Date().getFullYear()} Medivik. All rights reserved. <br />
                    <small>In compliance with Drug and Cosmetic Act and Rules, we don't process requests for
                        Schedule X and other habit forming drugs.</small>
                </div>
                <div className="flex gap-[15px]">
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#ffb400] text-[#0a6644] w-[35px] h-[35px] rounded-full flex items-center justify-center no-underline transition-all duration-300 hover:bg-white hover:-translate-y-1"><Instagram className="w-5 h-5" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
