// src/components/ui/Contact.js

import React from "react";

export default function Contact() {
  return (
    <div className="font-sans">
      {/* Header + GIF Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center py-16 px-4 pt-20 pb-32 bg-white">
        {/* Left: GIF with red offset box */}
        <div className="relative w-96 h-96 flex-shrink-0 mx-auto md:mx-0">
          <div
            className="absolute bg-red-500 rounded-lg"
            style={{
              top: "20%",
              left: "-20%",
              width: "100%",
              height: "100%",
            }}
          />
          <img
            src="/assets/contact-image.gif"
            alt="Contact Illustration"
            className="relative z-10 w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right: Text, level with GIF */}
        <div className="mt-8 md:mt-0 md:ml-12 max-w-md text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold italic text-gray-900">
            Get In Touch.
          </h1>
          <p className="mt-4 text-xl md:text-1xl text-gray-700">
            We’d love to hear from you. Whether you’re ready to start your next big
            project or just want to learn more about what we do, this is where it
            all begins. Let’s build something impactful.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-red-500" />

      {/* Contact Form Section with Transparent Background */}
      <section
        className="bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 bg-transparent">
          <form className="space-y-6 bg-transparent">
            {/* First Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="First Name"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                required
                placeholder="Company Name"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                required
                placeholder="Business Industry"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <textarea
                required
                placeholder="Describe your brand in a few sentences"
                className="border p-3 rounded w-full bg-white bg-opacity-81 md:col-span-2"
                rows={3}
              />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                placeholder="Where are you located?"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="url"
                placeholder="Website"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                placeholder="Instagram"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
              <input
                type="text"
                placeholder="TikTok"
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              />
            </div>

            {/* Services dropdown */}
            <div>
              <label className="block font-semibold mb-2 text-white">
                What services are you interested in?
              </label>
              <select
                required
                className="border p-3 rounded w-full bg-white bg-opacity-81"
              >
                <option value="">Select a service</option>
                <option>Social Media Management</option>
                <option>Social Media Audit</option>
                <option>
                  Content Capture (shoot days, bulk content days) (starts at $1,000)
                </option>
                <option>Consultation ($150/hour)</option>
                <option>Social Media Strategy Deck</option>
                <option>Campaign/Social Strategy</option>
              </select>
            </div>

            {/* Budget & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 text-white">
                  What is your estimated budget?
                </label>
                <input
                  type="text"
                  required
                  className="border p-3 rounded w-full bg-white bg-opacity-81"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-white">
                  Preferred Start Date
                </label>
                <input
                  type="date"
                  required
                  className="border p-3 rounded w-full bg-white bg-opacity-81"
                />
              </div>
            </div>

            {/* Referral */}
            <div>
              <label className="block font-semibold mb-2 text-white">
                How did you hear about us?
              </label>
              <select className="border p-3 rounded w-full bg-white bg-opacity-801">
                <option value="">Select an option</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="referral">Referral</option>
                <option value="search">Google/Search</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
