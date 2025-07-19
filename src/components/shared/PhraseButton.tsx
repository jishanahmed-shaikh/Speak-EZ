import React from 'react';

interface PhraseButtonProps {
  phrase: string;
  onSpeak: (text: string) => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  className?: string;
}

export function PhraseButton({ phrase, onSpeak, isFavorited, onToggleFavorite, className }: PhraseButtonProps) {
  return (
    <div className="relative flex items-center">
      <button
        className={`w-full rounded-lg px-3 py-2 min-h-[44px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition ${className}`}
        onClick={() => onSpeak(phrase)}
        aria-label={`Speak: ${phrase}`}
      >
        {phrase}
      </button>
      <button
        className={`absolute -top-2 -right-2 bg-white rounded-full shadow p-1 transition ${isFavorited ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
        onClick={onToggleFavorite}
        aria-label={isFavorited ? `Remove ${phrase} from favorites` : `Add ${phrase} to favorites`}
        tabIndex={0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill={isFavorited ? 'currentColor' : 'none'} viewBox="0 0 20 20" stroke="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      </button>
    </div>
  );
}