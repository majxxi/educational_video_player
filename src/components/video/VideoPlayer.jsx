import React, { useRef, useState } from 'react';
import { VideoPlayerControls } from './VideoPlayerControls';

export const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-700">
      <video
        ref={videoRef}
        src={video.video_url}
        className="w-full"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <VideoPlayerControls
        videoRef={videoRef}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
      />
    </div>
  );
};
