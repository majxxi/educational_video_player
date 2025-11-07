import { useContext } from 'react';

/**
 * Custom hook to access app context
 * @throws {Error} If used outside AppProvider
 * @returns {Object} App context value
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
