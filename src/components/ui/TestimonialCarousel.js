import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Social House turned our engagement up +150%!', author: 'Client A' },
  { quote: 'Their creative campaigns boosted our brand awareness significantly.', author: 'Client B' },
  { quote: 'Professional, responsive, and results-driven.', author: 'Client C' },
];

export function TestimonialCarousel() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {testimonials.map((test, index) => (
        <motion.div
          key={index}
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3 }}
        >
          <p className="text-xl italic mb-2">“{test.quote}”</p>
          <p className="text-lg font-semibold">— {test.author}</p>
        </motion.div>
      ))}
    </div>
  );
}
