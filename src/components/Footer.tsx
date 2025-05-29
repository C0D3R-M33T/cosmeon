import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Facebook } from 'lucide-react';
import { ScreenFitText } from "./ScreenFitText";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBlue-950 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold tracking-wider text-white">
                COSMEON
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the orbital cloud infrastructure of the future, connecting Earth with unprecedented computing capabilities.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, url: '#' },
                { icon: <Linkedin className="h-5 w-5" />, url: '#' },
                { icon: <Github className="h-5 w-5" />, url: '#' },
                { icon: <Facebook className="h-5 w-5" />, url: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-darkBlue-800 text-gray-400 hover:text-cyan-400 p-2 rounded-full transition-colors duration-300"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {['Orbital Storage', 'Edge Computing', 'AI Testing', 'Remote Simulation', 'API Documentation'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Cosmos, Beyond Earth</li>
              <li>contact.cosmeon@gmail.com</li>
              <li>contact.roshmeet@gmail.com</li>
              <li>+91-70445-29443</li>
            </ul>
          </div>
        </div>

        <hr className="border-darkBlue-800 mb-8" />

        {/* ScreenFitText integration */}
        <div className="mb-24">
          <ScreenFitText text="COSMEON" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} COSMEON. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
