import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Social House Connecticut. All rights reserved.</p>
      <p className="mt-2">hello@socialhousect.com | (123) 456-7890</p>
    </footer>
  );
}
