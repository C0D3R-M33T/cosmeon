import React, { useState } from 'react';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/earth_rev.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-darkBlue-800 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-md bg-opacity-90">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="text-cyan-400">Orbital Revolution</span>
            </h2>
            <p className="text-xl text-gray-300">
              Be among the first to access our groundbreaking space-based cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            <div className="bg-darkBlue-750 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Join the Waitlist</h3>
              <p className="text-gray-300 mb-6">
                Sign up to receive updates on our launch timeline and be first in line for early access.
              </p>

              {submitted ? (
                <div className="bg-green-900/30 border border-green-500 text-green-400 rounded-lg p-4 text-center">
                  Thank you for joining! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 bg-darkBlue-900 border ${
                        error ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white`}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-darkBlue-900 font-medium py-3 rounded-lg hover:shadow-glow-cyan transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="bg-darkBlue-750 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Partnership Opportunities</h3>
              <p className="text-gray-300 mb-6">
                We're seeking strategic partners across industries to help shape the future of orbital cloud infrastructure.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact.cosmeon@gmail.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact.cosmeon@gmail.com
                </a>
                <a
                  href="tel:+917044529443"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 - 70445-29443
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
