// src/components/ui/Services.js

import React from "react";

export default function Services() {
  return (
    <div className="font-sans">

      {/* Hero */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            We offer full-service social marketing, creative, media and
            advertising disciplines, all grounded in a unique understanding
            of online culture and social behaviors.
          </p>
        </div>
      </section>

      {/* Core Disciplines */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Social Marketing
            </h2>
            <p className="text-gray-700">
              Strategy, community management, and content planning designed
              to grow and engage your audience organically.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Creative
            </h2>
            <p className="text-gray-700">
              Concepting and design—static, video, and motion—that cuts
              through the noise and resonates culturally.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Media & Advertising
            </h2>
            <p className="text-gray-700">
              Data-driven ad campaigns across social platforms that drive
              conversions and maximize ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Research & Insights
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Thanks to unparalleled research expertise that helps us unearth
            social insights, our creative ideas can live on any platform or medium.
          </p>
        </div>
      </section>

      {/* Production & Distribution */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Agile Production & Distribution
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Our agile production capabilities and culturally relevant media
            approach result in content that sparks conversation and drives action.
          </p>
        </div>
      </section>

      {/* Performance Advertising */}
      <section className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Performance Advertising
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            We create and run targeted ads that earn your business more revenue,
            leveraging data and creative testing to continuously optimize results.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-500 px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mt-4 text-lg text-white">
            Let’s spark conversation and drive action together.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-white text-red-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </div>
  );
}
