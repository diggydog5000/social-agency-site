import React from 'react';
import { Link } from 'react-router-dom';
import { VideoBackgroundLayout } from './VideoBackgroundLayout';

export default function Work() {
  const caseStudies = [
    {
      id: 1,
      image: '/assets/work-case-1.png',
      title: 'Mom & Pops Liquor Social Relaunch',
      description:
        'We overhauled M&Ps social presence with a fresh visual identity, new content pillars, and a community engagement program.',
      result:
        '🔹 150% increase in engagement in first 3 months\n🔹 2.5K new followers across Instagram & TikTok',
    },
    {
      id: 2,
      image: '/assets/work-case-2.png',
      title: 'Product Launch Campaign',
      description:
        'Crafted a multi-channel paid media strategy for Tallmans clothing launch, leveraging targeted video ads and influencer partnerships.',
      result:
        '🔹 100% increase pre-orders in 30 days\n🔹 35% lower cost-per-acquisition than industry benchmarks',
    },
    {
      id: 3,
      image: '/assets/work-case-3.png',
      title: 'Content Series for Nimble Realty',
      description:
        'Developed a serialized short-form video program to showcase Nimbles real estate portfolio and brand story.',
      result:
        '🔹 40% lift in brand mentions\n🔹 20% uptick in website traffic from social',
    },
  ];

  return (
    <VideoBackgroundLayout src="/assets/bg-video.mp4">
      {/* Content wrapper ensures text sits above video */}
      <div className="relative z-10 bg-white bg-opacity-90 text-gray-900">
        {/* Hero */}
        <section className="px-4 py-16 md:py-24 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight">
            Our Work
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            What we’ve accomplished for our clients—and how we helped them grow.
          </p>
        </section>

        {/* Case Study Grid */}
        <section className="px-4 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map(({ id, image, title, description, result }) => (
            <div
              key={id}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4 flex-1">{description}</p>
                <pre className="text-sm text-gray-600 whitespace-pre-wrap mb-6">
                  {result}
                </pre>
                <Link to="/contact" className="mt-auto inline-block">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="bg-gray-100 px-4 py-16 text-center">
         
          <Link to="/contact">
            <button className="mt-8 inline-block bg-red-500 text-white uppercase font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition">
              Let’s Collaborate [+]
            </button>
          </Link>
        </section>
      </div>
    </VideoBackgroundLayout>
  );
}
