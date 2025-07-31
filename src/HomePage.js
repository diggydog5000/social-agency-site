import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Social Media, Solved.
        </motion.h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          End-to-end social media marketing for small businesses. Strategy, content, and growth handled for you.
        </p>
        <button className="bg-white text-black text-lg px-8 py-4 rounded-2xl">Book Your Free Strategy Call</button>
      </section>

      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Content Creation",
              desc: "We craft high-quality photos, videos, and graphics that speak your brand's language."
            },
            {
              title: "Social Strategy",
              desc: "We develop winning strategies tailored to your business and audience."
            },
            {
              title: "Account Management",
              desc: "We schedule, post, and engage with your audience, so you don’t have to."
            }
          ].map((service, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-8 text-lg">Let’s create a powerful social media presence for your brand.</p>
        <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg">Schedule a Call</button>
      </section>

      <footer className="bg-gray-900 text-white py-10 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Agency Name. All rights reserved.</p>
        <p className="mt-2">hello@youragency.com | (123) 456-7890</p>
      </footer>
    </div>
  );
}
