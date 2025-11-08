import { createContext, useState } from 'react';
import { apiService } from '../api/videoService';

export const AppContext = createContext(null);

/**
 * App state provider component
 * Manages global application state and provides methods to update it
 */
export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
    comments: [],
    loading: false,
    error: null,
    view: 'splash', // splash | list | player | create
  });

  /**
   * Fetch all videos from API
   */
  const fetchVideos = async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const videos = await apiService.getVideos();
      setState(prev => ({ ...prev, videos, loading: false }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: error.message,
        // Fallback to demo data on error
        videos: [{
          id: 'demo-1',
          title: 'Introduction to React',
          description: 'Learn the basics of React development',
          video_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
          user_id: 'demo_user',
          created_at: new Date().toISOString()
        }]
      }));
    }
  };

  /**
   * Fetch comments for a specific video
   * @param {string} videoId - Video ID
   */
  const fetchComments = async (videoId) => {
    try {
      const comments = await apiService.getComments(videoId);
      setState(prev => ({ ...prev, comments }));
    } catch (error) {
      console.error('Error fetching comments:', error);
      setState(prev => ({ ...prev, comments: [] }));
    }
  };

  /**
   * Create a new video
   * @param {Object} videoData - Video data
   */
  const createVideo = async (videoData) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      await apiService.createVideo(videoData);
      setState(prev => ({ ...prev, loading: false, view: 'list' }));
      await fetchVideos();
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error: error.message }));
      throw error;
    }
  };

  /**
   * Create a new comment
   * @param {string} videoId - Video ID
   * @param {string} content - Comment content
   * @param {string} userId - User ID
   */
  const createComment = async (videoId, content, userId) => {
    try {
      await apiService.createComment(videoId, content, userId);
      await fetchComments(videoId);
    } catch (error) {
      console.error('Error creating comment:', error);
      throw error;
    }
  };

  /**
   * Navigate to different views
   * @param {string} view - View name
   * @param {Video|null} video - Optional video for player view
   */
  const navigateTo = (view, video = null) => {
    setState(prev => ({ 
      ...prev, 
      view, 
      selectedVideo: video,
      comments: video ? prev.comments : []
    }));
  };

  const value = {
    ...state,
    fetchVideos,
    fetchComments,
    createVideo,
    createComment,
    navigateTo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
