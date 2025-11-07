/**
 * Video upload form view
 * Form for creating new videos
 */
export const VideoUploadForm = () => {
  const { loading, error, navigateTo, createVideo } = useAppContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video_url: '',
  });
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValidationError('');
  };

  const handleSubmit = async () => {
    const error = validateVideoForm(formData);
    if (error) {
      setValidationError(error);
      return;
    }

    try {
      await createVideo(formData);
      setFormData({ title: '', description: '', video_url: '' });
    } catch (err) {
      setValidationError('Failed to upload video. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigateTo('list')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
          Back to Videos
        </button>
        
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Upload New Video</h2>
          
          {error && <ErrorMessage message={error} />}
          {validationError && <ErrorMessage message={validationError} />}
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Enter video title"
                maxLength="200"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent h-32 resize-none"
                placeholder="Describe your video"
                maxLength="2000"
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.description.length}/2000 characters
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Video URL *
              </label>
              <input
                type="url"
                value={formData.video_url}
                onChange={(e) => handleInputChange('video_url', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="https://example.com/video.mp4"
              />
              <p className="text-xs text-gray-500 mt-1">
                Direct link to video file (MP4, WebM, etc.)
              </p>
            </div>
            
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3"
            >
              {loading ? 'Uploading...' : 'Upload Video'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};