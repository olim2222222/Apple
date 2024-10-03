import React, { useState } from 'react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex space-x-8 w-full justify-around">
        {/* Original Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <form>
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Full Name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmailAddress(e.target.value)}
                value={emailAddress}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email Address"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 text-center text-gray-700">
            <p>Or reach out to us directly at:</p>
            <p className="mt-2">
              <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                info@example.com
              </a>
            </p>
            <p className="mt-2">
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        {/* Empty Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Provided info about you </h2>
          <p>Your full name is: {fullName}</p>
          <p>Your email address is: {emailAddress}</p>
          <p>Your message is {message}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
