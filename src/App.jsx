/**
 * Router component - handles view rendering
 * Routes between different views based on current state
 */
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