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
        <h1 className="text-5xl font-bold">Building Social Strategies That Work</h1>
        <p className="mt-4 text-xl">From Concept to Conversion</p>
        <Button size="lg" className="mt-6">Let's Collaborate</Button>
      </HeroBackground>


      <Footer />
      <ChatWidget />
    </div>
  );
}
