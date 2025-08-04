// src/components/ui/Contact.js

import React from "react";

export default function Contact() {
  return (
    <div className="font-sans pt-32">
      {/* Header + GIF Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center bg-white px-4 pt-24 pb-32">
        {/* … your GIF + text … */}
      </section>

      {/* Divider */}
      <div className="h-1 bg-red-500" />

      {/* Contact Form Section with Formspree */}
      <section
        className="bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg space-y-6 bg-transparent">
          <form
            // ← point your form here
            action="https://formspree.io/f/mldlwvwd"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="firstName"
                type="text"
                required
                placeholder="First Name"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last Name"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="company"
                type="text"
                required
                placeholder="Company Name"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="industry"
                type="text"
                required
                placeholder="Business Industry"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <textarea
                name="description"
                required
                placeholder="Describe your brand in a few sentences"
                className="border p-3 rounded w-full bg-white bg-opacity-80 md:col-span-2"
                rows={3}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="location"
                type="text"
                placeholder="Where are you located?"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="website"
                type="url"
                placeholder="Website"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="instagram"
                type="text"
                placeholder="Instagram"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
              <input
                name="tiktok"
                type="text"
                placeholder="TikTok"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              />
            </div>

            {/* Services dropdown */}
            <div>
              <label className="block font-semibold mb-2 text-gray-900">
                What services are you interested in?
              </label>
              <select
                name="service"
                required
                className="border p-3 rounded w-full bg-white bg-opacity-80"
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
                <label className="block font-semibold mb-2 text-gray-900">
                  What is your estimated budget?
                </label>
                <input
                  name="budget"
                  type="text"
                  required
                  className="border p-3 rounded w-full bg-white bg-opacity-80"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-900">
                  Preferred Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  required
                  className="border p-3 rounded w-full bg-white bg-opacity-80"
                />
              </div>
            </div>

            {/* Referral */}
            <div>
              <label className="block font-semibold mb-2 text-gray-900">
                How did you hear about us?
              </label>
              <select
                name="referral"
                className="border p-3 rounded w-full bg-white bg-opacity-80"
              >
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
