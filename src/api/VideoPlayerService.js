import { CONFIG } from '../config/constants';

/**
 * Centralized API service for all backend communication
 */
class VideoAPIService {
  constructor(baseURL, userId) {
    this.baseURL = baseURL;
    this.userId = userId;
  }
 
  async getVideos() {
    const response = await fetch(`${this.baseURL}/videos`);
    if (!response.ok) throw new Error('Failed to fetch videos');
    return response.json();
  }

  async createVideo(videoData) {
    const response = await fetch(`${this.baseURL}/videos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...videoData, user_id: this.userId }),
    });
    if (!response.ok) throw new Error('Failed to create video');
    return response.json();
  }

  async getComments(videoId) {
    const response = await fetch(`${this.baseURL}/videos/${videoId}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
  }

  async createComment(videoId, content, userId) {
    const response = await fetch(`${this.baseURL}/videos/${videoId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, user_id: userId }),
    });
    if (!response.ok) throw new Error('Failed to create comment');
    return response.json();
  }
}

export const apiService = new VideoAPIService(CONFIG.API_BASE_URL, CONFIG.USER_ID);
