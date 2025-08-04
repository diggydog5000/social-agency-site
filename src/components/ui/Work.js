// src/components/ui/Work.js

import React from 'react';
import { Link } from 'react-router-dom';

// Replace these imports with your actual case-study images
import CaseStudy1 from '../public/assets/work-case-1.png';
import CaseStudy2 from '../public/assets/work-case-2.png';
import CaseStudy3 from '../public/assets/work-case-3.png';

export default function Work() {
  const caseStudies = [
    {
      id: 1,
      image: CaseStudy1,
      title: 'Brand X Social Relaunch',
      description:
        'We overhauled Brand X’s social presence with a fresh visual identity, new content pillars, and a community engagement program.',
      result: '🔹 150% increase in engagement in first 3 months\n🔹 25K new followers across Instagram & TikTok',
    },
    {
      id: 2,
      image: CaseStudy2,
      title: 'Product Launch Campaign',
      description:
        'Crafted a multi-channel paid media strategy for Product Y’s launch, leveraging targeted video ads and influencer partnerships.',
      result: '🔹 10,000+ pre-orders in 30 days\n🔹 35% lower cost-per-acquisition than industry benchmarks',
    },
    {
      id: 3,
      image: CaseStudy3,
      title: 'Content Series for Y Corp',
      description:
        'Developed a serialized short-form video program to showcase Y Corp’s sustainability efforts and brand story.',
      result: '🔹 40% lift in brand mentions\n🔹 20% uptick in website traffic from social',
    },
  ];

  return (
    <div className="bg-white text-gray-900">

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
          <div key={id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg flex flex-col">
            
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
              <pre className="text-sm text-gray-600 whitespace-pre-wrap mb-6">{result}</pre>
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
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to see results like these?
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Let’s talk about how we can help your brand unlock its full potential.
        </p>
        <Link to="/contact">
          <button className="mt-8 bg-black hover:bg-gray-800 text-white uppercase font-semibold py-3 px-8 rounded-full transition">
            Let’s Collaborate
          </button>
        </Link>
      </section>

    </div>
  );
}
