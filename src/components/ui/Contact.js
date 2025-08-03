import React from "react";

export default function Contact() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <section className="bg-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          We’d love to hear from you. Whether you’re ready to start your next big project or just want to learn more about what we do, this is where it all begins. Let’s build something impactful.
        </p>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gray-300" />

      {/* Contact Form Section with Background */}
      <section
        className="bg-cover bg-center py-20 px-6"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="max-w-4xl mx-auto bg-white bg-opacity-95 p-8 rounded-2xl shadow-lg backdrop-blur-md space-y-6">
          <form className="space-y-6">
            {/* First Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" required placeholder="First Name" className="border p-3 rounded w-full" />
              <input type="text" required placeholder="Last Name" className="border p-3 rounded w-full" />
              <input type="email" required placeholder="Email" className="border p-3 rounded w-full" />
              <input type="text" required placeholder="Company Name" className="border p-3 rounded w-full" />
              <input type="text" required placeholder="Business Industry" className="border p-3 rounded w-full" />
              <textarea required placeholder="Describe your brand in a few sentences" className="border p-3 rounded w-full md:col-span-2" />
              <input type="tel" placeholder="Phone Number (optional)" className="border p-3 rounded w-full" />
              <input type="text" placeholder="Where are you located?" className="border p-3 rounded w-full" />
              <input type="url" placeholder="Website" className="border p-3 rounded w-full" />
              <input type="text" placeholder="Instagram" className="border p-3 rounded w-full" />
              <input type="text" placeholder="TikTok" className="border p-3 rounded w-full" />
            </div>

            {/* Second Section */}
            <div>
              <label className="block font-semibold mb-2">What services are you interested in?</label>
              <div className="space-y-2">
                {[
                  "Social Media Management",
                  "Social Media Audit",
                  "Content Capture (shoot days, bulk content days) (starts at $1,000)",
                  "Consultation ($150/hour)",
                  "Social Media Strategy Deck",
                  "Campaign/Social Strategy",
                ].map((service, i) => (
                  <div key={i}>
                    <label className="inline-flex items-center">
                      <input type="radio" name="service" required className="mr-2" value={service} />
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">What is your estimated budget?</label>
                <input type="text" required className="border p-3 rounded w-full" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Preferred Start Date</label>
                <input type="date" required className="border p-3 rounded w-full" />
              </div>
            </div>

            {/* Referral */}
            <div>
              <label className="block font-semibold mb-2">How did you hear about us?</label>
              <select className="border p-3 rounded w-full">
                <option value="">Select an option</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="referral">Referral</option>
                <option value="search">Google/Search</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
