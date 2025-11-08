import React from 'react';

export const CommentItem = ({ comment }) => (
  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
    <p className="text-sm font-semibold text-gray-900 mb-1">
      {comment.user_id}
    </p>
    <p className="text-gray-800 break-words">{comment.content}</p>
    <p className="text-xs text-gray-500 mt-2">
      {new Date(comment.created_at).toLocaleDateString()}
    </p>
  </div>
);
