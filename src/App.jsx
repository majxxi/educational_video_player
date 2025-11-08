import React from 'react';
import { AppProvider } from './context/AppContext';
import { useAppContext } from './context/useAppContext';
import { SplashScreen } from './views/SplashScreen';
import { VideoListView } from './views/VideoListView';
import { VideoUploadForm } from './views/VideoUploadForm';
import { VideoPlayerView } from './views/VideoPlayerView';

const AppRouter = () => {
  const { view } = useAppContext();

  switch (view) {
    case 'splash':
      return <SplashScreen />;
    case 'list':
      return <VideoListView />;
    case 'create':
      return <VideoUploadForm />;
    case 'player':
      return <VideoPlayerView />;
    default:
      return <SplashScreen />;
  }
};

/**
 * Main application component
 * Wraps app with providers and routing
 */
const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;