import React from 'react';

export function ServiceCard({ icon, title, description }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition">{description}</p>
      <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-80 transition rounded-2xl pointer-events-none" />
    </div>
  );
}
