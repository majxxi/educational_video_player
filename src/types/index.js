/**
 * @typedef {Object} Video
 * @property {string} id - Unique video identifier
 * @property {string} title - Video title
 * @property {string} description - Video description
 * @property {string} video_url - URL to video file
 * @property {string} user_id - Creator's user ID
 * @property {string} created_at - ISO timestamp
 */

/**
 * @typedef {Object} Comment
 * @property {string} id - Unique comment identifier
 * @property {string} video_id - Associated video ID
 * @property {string} user_id - Comment author ID
 * @property {string} content - Comment text
 * @property {string} created_at - ISO timestamp
 */