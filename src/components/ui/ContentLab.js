import React from 'react';

export function ContentLab() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="/lab.jpg" alt="Content Lab" className="rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-semibold mb-4">Content Lab</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Branded Shoot Days</li>
          <li>Professional Editing & Motion</li>
          <li>Multi-channel Distribution</li>
        </ul>
        <a href="/docs/content-lab.pdf" className="mt-4 inline-block text-blue-600 hover:underline">
          Download One-Pager →
        </a>
      </div>
    </div>
  );
}
