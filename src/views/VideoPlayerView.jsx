import React from 'react';
import { useAppContext } from '../context/useAppContext';
import { VideoPlayer } from '../components/video/VideoPlayer';
import { VideoInfo } from '../components/video/VideoInfo';
import { CommentSection } from '../components/comments/CommentSection';


export const VideoPlayerView = () => {
  const { selectedVideo, navigateTo } = useAppContext();

  if (!selectedVideo) {
    navigateTo('list');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <button
        onClick={() => navigateTo('list')}
        className="flex items-center gap-2 text-gray-300 hover:text-white mb-4 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
        Back to Videos
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer video={selectedVideo} />
          <VideoInfo video={selectedVideo} />
        </div>
        
        <CommentSection videoId={selectedVideo.id} />
      </div>
    </div>
  );
};