// src/HomePage.js

import React from 'react';
import { HeroBackground } from './components/ui/HeroBackground';
import {
  Button,
  ServiceCard,
  TimelineStep,
  ContentLab,
  TestimonialCarousel,
  Navbar,
  Footer,
  ChatWidget
} from './components';

export default function HomePage() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 10h18M3 6h18M3 14h18M3 18h18" />
        </svg>
      ),
      title: 'Strategy',
      description: 'Data-driven planning to hit your KPIs.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: 'Content',
      description: 'Creative content aligned with your brand.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 12h14M12 5v14" />
        </svg>
      ),
      title: 'Paid Media',
      description: 'Targeted ads for maximum reach.'
    }
  ];

  const processSteps = [
    { title: 'Audit', description: 'Analyze current performance.' },
    { title: 'Strategy', description: 'Develop bespoke plan.' },
    { title: 'Execution', description: 'Implement campaigns.' },
    { title: 'Optimize', description: 'Continuous improvement.' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero section with background image */}
      <HeroBackground imageUrl="/assets/background.png" overlayOpacity={0.5}>
        <h1 className="text-5xl font-bold">We Build Social Strategies with Impact</h1>
        <p className="mt-4 text-xl">From Concept to Conversion, We've Got You Covered</p>
        <Button size="lg" className="mt-6">Let's Collaborate</Button>
      </HeroBackground>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {services.map(service => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <Button variant="outline" size="lg" className="mt-8">
          Explore All Services
        </Button>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-12">Case Studies</h2>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex space-x-6 px-4">
            {[1,2,3,4].map(i => (
              <div
                key={i}
                className="relative w-64 h-40 bg-gray-200 rounded-lg shadow-lg group"
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Button variant="outline" size="sm">View Case Study</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-12">Our Process</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {processSteps.map((step, index) => (
            <TimelineStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      {/* Content Lab */}
      <section id="contentlab" className="py-20 bg-white">
        <ContentLab />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <TestimonialCarousel />
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-8">Let's create a powerful social media presence for your brand.</p>
        <Button size="lg">Schedule a Call</Button>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
