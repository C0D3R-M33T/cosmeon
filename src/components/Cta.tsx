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
              Join the <span className="text-amber-400">Orbital Revolution</span>
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
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white`}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-darkBlue-900 font-medium py-3 rounded-lg hover:shadow-glow transition-all duration-300"
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
                  href="mailto:contact@cosmeon.in"
                  className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
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
                  contact@cosmeon.in
                </a>
                {/* <a
                  href="tel:+917044529443"
                  className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
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
                </a> */}
                <a
                  href="https://www.linkedin.com/in/roshmeet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.758 0 5-2.24 5-5v-14c0-2.76-2.242-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.6c0-1.335-.027-3.055-1.863-3.055-1.864 0-2.151 1.454-2.151 2.957v5.698h-3v-11h2.881v1.507h.041c.401-.758 1.377-1.557 2.836-1.557 3.033 0 3.594 1.997 3.594 4.59v6.46z" />
                  </svg>
                  Connect on LinkedIn
                </a>
                <div className="pt-6 border-t border-white/10 mt-6">
                  <p className="text-gray-300 mb-4">
                    Prefer talking to the team directly? Share a bit about your mission and we&apos;ll reach out.
                  </p>
                  <a
                    href="https://forms.gle/9k8No42CR4G7BhgP9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-amber-400 px-4 py-3 text-amber-400 font-semibold hover:bg-amber-400 hover:text-darkBlue-900 transition-colors"
                  >
                    Contact the Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
