import React from 'react';
import { useAppContext } from '../context/useAppContext';
import { Button } from '../components/common/Button';

export const SplashScreen = () => {
  const { navigateTo } = useAppContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center mb-4 shadow-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-black">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">EduStream</h1>
          <p className="text-xl text-gray-300 mb-8">Your Gateway to Educational Videos</p>
        </div>
        <Button
          onClick={() => navigateTo('list')}
          className="px-8 py-4 text-lg shadow-xl"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};