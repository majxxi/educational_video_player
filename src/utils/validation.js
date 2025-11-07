/**
 * Validate video upload form data
 * @param {Object} formData - Form data to validate
 * @returns {string|null} Error message or null if valid
 */
export const validateVideoForm = (formData) => {
  if (!formData.title?.trim()) return 'Title is required';
  if (!formData.description?.trim()) return 'Description is required';
  if (!formData.video_url?.trim()) return 'Video URL is required';
  
  try {
    new URL(formData.video_url);
  } catch {
    return 'Please enter a valid URL';
  }
  
  return null;
};

/**
 * Validate comment form data
 * @param {string} author - Author name
 * @param {string} content - Comment content
 * @param {number} maxLength - Maximum content length
 * @returns {string|null} Error message or null if valid
 */
export const validateCommentForm = (author, content, maxLength) => {
  if (!author?.trim()) return 'Please enter your name';
  if (!content?.trim()) return 'Please enter a comment';
  if (content.length > maxLength) return `Comment too long (max ${maxLength} characters)`;
  return null;
};