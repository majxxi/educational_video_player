import React from 'react';

export const VideoInfo = ({ video }) => (
  <div className="mt-6 bg-white border border-gray-200 rounded-lg p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h2>
    <p className="text-gray-700 mb-4">{video.description}</p>
    <div className="flex items-center justify-between text-sm text-gray-500">
      <span>Uploaded by {video.user_id}</span>
      <span>{new Date(video.created_at).toLocaleDateString()}</span>
    </div>
  </div>
);
