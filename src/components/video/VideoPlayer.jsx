import { useRef, useState } from 'react';

/**
 * Video player component wrapper
 * Contains video element and controls
 * @param {Object} props
 * @param {Video} props.video - Video object
 */
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
