import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '@/data/content';

interface HeaderProps {
  selectedLanguage: string;
}

interface ProfileModalProps {
  selectedLanguage: string;
  onClose: () => void;
}

function ProfileModal({ selectedLanguage, onClose }: ProfileModalProps) {
  const T = TRANSLATIONS[selectedLanguage] || TRANSLATIONS['en'] || {};

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* --- MODAL CONTENT: Updated bg to cream white, and accent color to blue --- */}
      <div className="bg-stone-50 dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-200/80 dark:border-gray-700/80 transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
            </svg>
            {T.profile || 'Profile'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Close profile"
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shadow-lg">
            <svg xmlns='http://www.w3.org/2000/svg' className='w-12 h-12 text-blue-600 dark:text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
            </svg>
          </div>
          
          <div className="text-center">
            <div className="font-semibold text-lg text-blue-600 dark:text-blue-400">Welcome to Speak-EZ!</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export function Header({ selectedLanguage }: HeaderProps) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <header className="py-4 px-4 flex items-center justify-between border-b border-gray-900/10 dark:border-white/10 rounded-t-[2rem]">
        {/* --- HEADER TITLE: Removed gradient for a solid blue color --- */}
        <h1 className="text-2xl font-extrabold tracking-tight text-black dark:text-blue-400 flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 text-black dark:text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.96 8.96 0 01-4-.93L3 21l1.07-3.21A7.963 7.963 0 013 12c0-3.866 3.582-7 8-7s8 3.134 8 7z' />
          </svg>
          Speak-EZ
        </h1>

        {/* --- PROFILE BUTTON: Changed from green to a solid blue theme --- */}
        <button
          onClick={() => setShowProfile(true)}
          className="p-2 rounded-full bg-transparent hover:bg-gray-200 dark:bg-blue-900 dark:hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label="Open profile"
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-black dark:text-blue-300' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
          </svg>
        </button>
      </header>

      {showProfile && (
        <ProfileModal 
          selectedLanguage={selectedLanguage} 
          onClose={() => setShowProfile(false)} 
        />
      )}
    </>
  );
}