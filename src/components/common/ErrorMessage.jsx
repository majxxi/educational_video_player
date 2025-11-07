/**
 * Error message component
 * Displays error messages in a styled container
 * @param {Object} props
 * @param {string} props.message - Error message to display
 */
export const ErrorMessage = ({ message }) => (
  <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
    <p className="text-gray-900 text-sm">{message}</p>
  </div>
);