import React from 'react';

export function Footer() {
  return (
    <footer className="bg-red-900 text-white py-4 text-center text-xs">
      <p>&copy; {new Date().getFullYear()} Built by a Connecticut Creative. All rights reserved.</p>
      <p className="mt-2">hello@socialhousect.com | (860) 967-1234</p>
    </footer>
  );
}
