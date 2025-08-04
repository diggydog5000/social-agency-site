// src/components/ui/Services.js

import React from "react";
export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-900">

      {/* Hero */}
      <section className="px-2 py-2 md:py-12 lg:py-16 max-w-7xl mx-auto">
        {/* 2-line uppercase, extra-large heading */}
        <h1 className="font-extrabold uppercase tracking-tight leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
          DIGITAL MARKETING SOLUTIONS<br/>FOR YOUR BRAND
        </h1>

        {/* Image + intro copy side-by-side */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: hero image */}
          <div>
            <img
              src="/assets/hero-image.png"
              alt="Hero: digital marketing mockup"
              className="w-3/4 h-auto object-cover "
            />
          </div>

          {/* Right: tagline + paragraph */}
          <div className="text-left space-y-4">
            <div className="uppercase text-xs font-bold text-gray-700">
              CUSTOM STRATEGIES, SCALABLE CONTENT, AND PERFORMANCE MEDIA THAT CONVERTS
            </div>
            <p className="text-base leading-relaxed">
              At Connecticut Creative, we deliver integrated digital marketing solutions that help modern brands grow. Our offerings are designed to build meaningful customer connections, increase ROI, and keep your brand ahead in a constantly evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 text-1xl">↓↓↓</div>
      </section>

      <hr className="border-red-500" />

      {/* Strategy & Brand Intelligence */}
      <section className="px-4 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: image */}
        <div className="md:w-1/2">
          <img
            src="/assets/strategy-image.png"
            alt="Strategy & Brand Intelligence"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right: headline + copy + button */}
        <div className="md:w-1/2">
          {/* 2-line section title */}
          <h2 className="font-extrabold uppercase tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
            STRATEGY & BRAND<br/>INTELLIGENCE
          </h2>

          {/* sub-heading */}
          <div className="mt-4 uppercase text-xs font-semibold text-gray-700">
            DIGITAL STRATEGY SERVICES THAT ALIGN BRAND GOALS WITH CONSUMER BEHAVIOR
          </div>

          {/* body text */}
          <p className="mt-4 text-base leading-relaxed">
            Our Strategy & Brand Intelligence team crafts custom digital strategies rooted in data, behavioral insights, and market trends. From brand positioning and audience segmentation to content roadmaps and campaign planning, we turn insights into action to fuel brand growth.
          </p>

          {/* CTA button */}
          <button className="mt-8 inline-block bg-black text-white uppercase font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition">
            START YOUR DIGITAL STRATEGY [+]
          </button>
        </div>
      </section>

      <hr className="border-red-500" />

      {/* Content Creation & Influencer Partnerships */}
      <section className="px-4 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: image */}
        <div className="md:w-1/2">
          <img
            src="/assets/strategy-image.png"
            alt="Strategy & Brand Intelligence"
            className="w-full h-auto object-cover rounded-lg "
          />
        </div>

        {/* Right: headline + copy + button */}
        <div className="md:w-1/2">
          {/* 2-line section title */}
          <h2 className="font-extrabold uppercase tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
          Content Creation & Influencer Partnerships
          </h2>

          {/* sub-heading */}
          <div className="mt-4 uppercase text-xs font-semibold text-gray-700">
          Content Marketing & Influencer Strategy that Captivates and Converts
          </div>

          {/* body text */}
          <p className="mt-4 text-base leading-relaxed">
          We develop high-impact visual content and strategic influencer campaigns tailored to your audience. From short-form video and branded photography to influencer. activations and cross-channel content calendars, we deliver storytelling that drives engagement and brand loyalty.
          </p>

          {/* CTA button */}
          <button className="mt-8 inline-block bg-black text-white uppercase font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition">
            START YOUR DIGITAL STRATEGY [+]
          </button>
        </div>
      </section>


      <hr className="border-red-500" />

      {/* Paid & Performance Marketing */}
      <section className="px-4 py-16 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Left: image */}
        <div className="md:w-1/2">
          <img
            src="/assets/strategy-image.png"
            alt="Strategy & Brand Intelligence"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right: headline + copy + button */}
        <div className="md:w-1/2">
          {/* 2-line section title */}
          <h2 className="font-extrabold uppercase tracking-tight leading-tight text-4xl sm:text-5xl md:text-6xl">
          Paid & Performance Marketing
          </h2>

          {/* sub-heading */}
          <div className="mt-4 uppercase text-xs font-semibold text-gray-700">
          Performance Marketing and Paid Media that Drives Scalable Growth
          </div>

          {/* body text */}
          <p className="mt-4 text-base leading-relaxed">
          Our Paid & Performance Marketing team delivers full-funnel paid media strategies that combine digital advertising, paid social campaigns, and strategic media planning. Using real-time optimization, data-driven insights, and creative testing, we drive scalable growth, maximize ROI, increase customer acquisition, and extend customer lifetime value, turning every marketing dollar into measurable results.
          </p>

          {/* CTA button */}
          <button className="mt-8 inline-block bg-black text-white uppercase font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition">
            START YOUR DIGITAL STRATEGY [+]
          </button>
        </div>
      </section>



    </div>
  );
}
