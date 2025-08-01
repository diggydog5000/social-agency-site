import React from 'react';

export function TimelineStep({ title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">•</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
