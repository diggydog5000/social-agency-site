import React from "react";

export default function ContactPage() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <section className="bg-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          We’d love to hear from you. Whether you’re ready to start your next big project or just want to learn more about what we do, this is where it all begins. Let’s build something impactful.
        </p>
      </section>

      {/* Divider and Background Color Change */}
      <div className="h-1 bg-gray-300" />

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16 px-6">
        <form className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
          {/* Section 1: General Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium text-gray-700">First Name *</label>
              <input type="text" required className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Last Name *</label>
              <input type="text" required className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email *</label>
              <input type="email" required className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Company Name *</label>
              <input type="text" required className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">Business Industry *</label>
              <input type="text" required className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">Describe your brand in a few sentences *</label>
              <textarea required className="w-full mt-1 border rounded-lg p-2" rows="3"></textarea>
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone Number (Optional)</label>
              <input type="tel" className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Where are you located? (Optional)</label>
              <input type="text" className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Website (Optional)</label>
              <input type="url" className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Instagram (Optional)</label>
              <input type="text" className="w-full mt-1 border rounded-lg p-2" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">TikTok (Optional)</label>
              <input type="text" className="w-full mt-1 border rounded-lg p-2" />
            </div>
          </div>

          {/* Section 2: Services Interested In */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">What services are you interested in? *</h2>
            <div className="mt-4 space-y-2">
              {[
                "Social Media Management",
                "Social Media Audit",
                "Content Capture (shoot days, bulk content days) (starts at $1,000)",
                "Consultation ($150/hour)",
                "Social Media Strategy Deck",
                "Campaign/Social Strategy",
              ].map((service) => (
                <label key={service} className="block">
                  <input type="radio" name="services" required className="mr-2" value={service} />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Section 3: Budget and Start Date */}
          <div>
            <label className="block font-medium text-gray-700">What is your estimated budget? *</label>
            <input type="text" required className="w-full mt-1 border rounded-lg p-2" />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Preferred Start Date *</label>
            <input type="date" required className="w-full mt-1 border rounded-lg p-2" />
          </div>

          {/* Dropdown for Referral */}
          <div>
            <label className="block font-medium text-gray-700">How did you hear about us? (Optional)</label>
            <select className="w-full mt-1 border rounded-lg p-2">
              <option value="">Select</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Referral">Referral</option>
              <option value="Google Search">Google Search</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
