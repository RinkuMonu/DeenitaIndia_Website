import React from 'react';

export default function BlogDetailPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-10 lg:px-20 py-10">
      {/* Left Blog Content */}
      <div className="lg:w-2/3 w-full">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        
        <div className="text-sm text-gray-500 mb-4">
          <span>02-Aug-2025 • Author: Admin</span>
        </div>

        <img
          src="/blog-image.jpg"
          alt="Blog"
          className="rounded-lg mb-6 w-full h-auto"
        />

        <div className="space-y-4 text-gray-700">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco...</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit...</p>
        </div>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Add a Comment</h2>
          <textarea className="w-full border rounded p-2" rows="4" placeholder="Write your comment..."></textarea>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>

      {/* Right Sidebar (Sticky) */}
      <div className="lg:w-1/3 w-full relative">
        <div className="lg:sticky top-20 space-y-6">
          {/* Trending Posts */}
          <div className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-bold mb-4 text-lg">🔥 Trending Blog</h3>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3">
                <img src="/thumb.jpg" alt="thumb" className="w-16 h-12 object-cover rounded" />
                <div className="text-sm">Trending blog title #{i + 1}</div>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-bold mb-4 text-lg">🕘 Recent Posts</h3>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 mb-3">
                <img src="/thumb.jpg" alt="thumb" className="w-16 h-12 object-cover rounded" />
                <div className="text-sm">Recent post title #{i + 1}</div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="border rounded-lg p-4 shadow-sm bg-white">
            <h3 className="font-bold mb-4 text-lg">📚 Categories</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>Cybersecurity</li>
              <li>Data Privacy</li>
              <li>Cloud Solutions</li>
              <li>Software Dev</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
