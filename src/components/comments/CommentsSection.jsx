import { useEffect, useState } from 'react';

/**
 * Comments section component
 * Displays list of comments and form for new comments
 * @param {Object} props
 * @param {string} props.videoId - Video ID
 */
export const CommentsSection = ({ videoId }) => {
  const { comments, createComment, fetchComments } = useAppContext();
  const [error, setError] = useState('');

  useEffect(() => {
    if (videoId) {
      fetchComments(videoId);
    }
  }, [videoId]);

  const handleSubmit = async (author, content) => {
    setError('');

    const validationError = validateCommentForm(author, content, CONFIG.MAX_COMMENT_LENGTH);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await createComment(videoId, content, author);
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-fit">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
        </svg>
        Comments ({comments.length})
      </h3>
      
      <CommentForm onSubmit={handleSubmit} error={error} />
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No comments yet. Be the first!</p>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};
