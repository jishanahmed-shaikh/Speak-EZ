'use client';

import React, { useEffect, useState } from "react";

const FAVORITES_KEY = "speakez_favorites";

interface FavoritesProps {
  onSpeak?: (phrase: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ onSpeak }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const removeFavorite = (phrase: string) => {
    const updated = favorites.filter(fav => fav !== phrase);
    setFavorites(updated);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  if (favorites.length === 0) {
    return <div className="text-gray-500 text-center py-2">No favorites yet. Pin phrases to save them here.</div>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {favorites.map((phrase, idx) => (
        <div key={idx} className="relative group">
          <button
            className="bg-yellow-100 hover:bg-yellow-200 text-gray-900 rounded-lg px-4 py-2 min-w-[44px] min-h-[44px] text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => onSpeak && onSpeak(phrase)}
            aria-label={`Speak favorite: ${phrase}`}
          >
            {phrase}
          </button>
          <button
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => removeFavorite(phrase)}
            aria-label={`Remove ${phrase} from favorites`}
            tabIndex={0}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites; 