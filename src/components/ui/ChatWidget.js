import React, { useState } from 'react';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6">
      {open && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg w-64">
          <h4 className="font-semibold mb-2">Send us a message</h4>
          <textarea className="w-full p-2 border rounded mb-2" rows="3" placeholder="Hi there!" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpen(false)}>
            Send
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none"
      >
        {open ? '×' : 'Chat'}
      </button>
    </div>
  );
}
