import { TRANSLATIONS } from '@/data/content';
import { PhraseButton } from '../shared/PhraseButton';

interface FavoritesViewProps {
  favorites: string[];
  handleSpeak: (text: string) => void;
  handleUnfavorite: (phrase: string) => void;
  isFavorited: (phrase: string) => boolean;
  selectedLanguage: string;
}

export function FavoritesView({ favorites, handleSpeak, handleUnfavorite, isFavorited, selectedLanguage }: FavoritesViewProps) {
  const T = TRANSLATIONS[selectedLanguage];

  return (
    <section className="flex flex-col gap-4 items-center h-full animate-fade-in pt-4">
      <h2 className="text-xl font-bold text-yellow-500 flex items-center gap-2">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z'/></svg>
        {T.favorites}
      </h2>
      {favorites.length === 0 ? (
        <div className="text-gray-500 text-center py-2 px-4">{T.noFavorites}</div>
      ) : (
        <div className="grid grid-cols-1 gap-3 w-full">
          {favorites.map((phrase) => (
             <PhraseButton
              key={phrase}
              phrase={phrase}
              onSpeak={handleSpeak}
              isFavorited={isFavorited(phrase)}
              onToggleFavorite={() => handleUnfavorite(phrase)}
              className="bg-yellow-100 hover:bg-yellow-200 text-gray-900 !px-4 !py-3 !text-base"
            />
          ))}
        </div>
      )}
    </section>
  );
}