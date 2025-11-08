import React from 'react';

export const VideoCard = ({ video, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
  >
    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
        {video.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-2 mb-2">
        {video.description}
      </p>
      <p className="text-xs text-gray-500">By {video.user_id}</p>
    </div>
  </div>
);
