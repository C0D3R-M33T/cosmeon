import React from 'react';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { ScreenFitText } from "./ScreenFitText";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBlue-950 py-12">
      <div className="container mx-auto px-4 text-center space-y-8">
        
        {/* Logo */}
        <div>
          <img
            src="/assets/logo_nav.png"
            alt="Cosmeon Logo"
            className="mx-auto h-24 w-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg sm:text-xl font-medium">
          contact.cosmeon@gmail.com
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {[
            { icon: <Facebook className="h-5 w-5" />, url: '#' },
            { icon: <Github className="h-5 w-5" />, url: '#' },
            { icon: <Twitter className="h-5 w-5" />, url: '#' },
            { icon: <Linkedin className="h-5 w-5" />, url: '#' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-cyan-400 p-2 rounded-full transition-colors duration-300"
              aria-label={`Social media link ${index + 1}`}
            >
              {social.icon}
            </a>
          ))}
        </div>


        {/* Divider */}
        <hr className="border-darkBlue-800 w-full" />


        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} COSMEON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;