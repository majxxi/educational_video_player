import { useEffect } from 'react';

/**
 * Video list view - main browsing page
 * Displays grid of all available videos
 */
export const VideoListView = () => {
  const { videos, loading, error, navigateTo, fetchVideos } = useAppContext();

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">EduStream</h1>
          <Button
            onClick={() => navigateTo('create')}
            className="flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Upload Video
          </Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Videos</h2>
        
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={`${error}. Showing demo data.`} />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => navigateTo('player', video)}
            />
          ))}
        </div>

        {!loading && videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No videos available yet</p>
            <button
              onClick={() => navigateTo('create')}
              className="text-gray-900 hover:text-gray-700 font-semibold underline"
            >
              Upload the first video
            </button>
          </div>
        )}
      </main>
    </div>
  );
};