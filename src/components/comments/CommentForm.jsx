import React, { useState } from 'react';
import { ErrorMessage } from '../common/ErrorMessage';
import { CONFIG } from '../../config/constants';

export const CommentForm = ({ onSubmit, error }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(author, content);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="mb-6">
      {error && <ErrorMessage message={error} />}
      
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="What is your name?"
        className="w-full px-3 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg mb-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
        maxLength="50"
      />
      <div className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What do you think of the video?"
          className="flex-1 px-3 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
          maxLength={CONFIG.MAX_COMMENT_LENGTH}
        />
        <button 
          onClick={handleSubmit}
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {content.length}/{CONFIG.MAX_COMMENT_LENGTH}
      </p>
    </div>
  );
};
