import { useState, useEffect } from 'react';
import { FAVORITES_KEY } from '@/data/content';

export function useFavorites(triggerConfetti: () => void) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  const handleFavorite = (phrase: string) => {
    if (!favorites.includes(phrase)) {
      setFavorites(prev => [...prev, phrase]);
      triggerConfetti();
    }
  };

  const handleUnfavorite = (phrase: string) => {
    setFavorites(prev => prev.filter(fav => fav !== phrase));
  };
  
  const isFavorited = (phrase: string) => favorites.includes(phrase);

  return { favorites, handleFavorite, handleUnfavorite, isFavorited };
}