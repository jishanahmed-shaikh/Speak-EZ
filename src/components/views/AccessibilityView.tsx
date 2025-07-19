import { TRANSLATIONS, LANGUAGES } from '@/data/content';

interface AccessibilityViewProps {
  fontSize: number;
  handleFontSize: (size: 'large' | 'normal' | 'small') => void;
  contrast: boolean;
  handleContrast: () => void;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
}

export function AccessibilityView({ fontSize, handleFontSize, contrast, handleContrast, selectedLanguage, setSelectedLanguage }: AccessibilityViewProps) {
  const T = TRANSLATIONS[selectedLanguage];
  
  // Fix progress calculation
  const getProgressWidth = () => {
    if (fontSize === 0.85) return 25; // Small
    if (fontSize === 1) return 50;    // Normal
    if (fontSize === 1.2) return 100; // Large
    return 50; // Default
  };

  const progressWidth = getProgressWidth();

  const getCurrentFontSizeLabel = () => {
    if (fontSize === 0.85) return T.fontSizeSmall || 'Small';
    if (fontSize === 1) return T.fontSizeNormal || 'Normal';
    if (fontSize === 1.2) return T.fontSizeLarge || 'Large';
    return T.fontSizeNormal || 'Normal';
  };

  return (
    <section className={`flex flex-col gap-6 items-center justify-center h-full animate-fade-in ${
      contrast ? 'bg-black' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <h2 className={`text-xl font-bold flex items-center gap-2 ${contrast ? 'text-white' : 'text-gray-800'}`}>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {T.access}
      </h2>
      
      <div className={`w-full rounded-xl p-6 flex flex-col gap-4 shadow-lg ${
        contrast 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200'
      }`}>
        <div className="flex flex-col gap-2 w-full items-center">
          <label className={`font-semibold text-sm mb-1 ${contrast ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="lang-select">
            {T.chooseLang}
          </label>
          <select
            id="lang-select"
            className={`w-full max-w-xs rounded-lg border px-3 py-2 text-base focus:outline-none focus:ring-2 ${
  contrast 
    ? 'bg-gray-800 text-white border-gray-600 focus:ring-white'
    : 'bg-white text-black border-gray-300 focus:ring-blue-300'
}`}

            value={selectedLanguage}
            onChange={e => setSelectedLanguage(e.target.value)}
          >
            {LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>
        
        {/* Font Size */}
        <div className="flex flex-col gap-2 w-full items-center">
          <label className={`font-semibold text-sm ${contrast ? 'text-gray-200' : 'text-gray-700'}`}>
            {T.fontSize}
          </label>
          <div className="flex gap-2 justify-center">
            <button 
              className={`w-12 h-10 rounded-lg font-semibold transition ${
                fontSize === 0.85 
                  ? (contrast ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                  : (contrast ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
              }`} 
              onClick={() => handleFontSize('small')}
              aria-label={T.fontSizeSmall || 'Small font size'}
            >
              A-
            </button>
            <button 
              className={`w-12 h-10 rounded-lg font-semibold transition ${
                fontSize === 1 
                  ? (contrast ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                  : (contrast ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
              }`} 
              onClick={() => handleFontSize('normal')}
              aria-label={T.fontSizeNormal || 'Normal font size'}
            >
              A
            </button>
            <button 
              className={`w-12 h-10 rounded-lg font-semibold transition ${
                fontSize === 1.2 
                  ? (contrast ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white') 
                  : (contrast ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
              }`} 
              onClick={() => handleFontSize('large')}
              aria-label={T.fontSizeLarge || 'Large font size'}
            >
              A+
            </button>
          </div>
          <div className={`w-full rounded-full h-1.5 mt-2 ${contrast ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className={`h-1.5 rounded-full transition-all duration-300 ${contrast ? 'bg-blue-500' : 'bg-blue-600'}`} 
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <div className={`text-xs ${contrast ? 'text-gray-400' : 'text-gray-500'}`}>
            {T.currentSize || 'Current'}: {getCurrentFontSizeLabel()}
          </div>
        </div>
        
        {/* Contrast */}
        <div className="flex flex-col gap-2 w-full items-center">
          <label className={`font-semibold text-sm ${contrast ? 'text-gray-200' : 'text-gray-700'}`}>
            {T.contrast}
          </label>
          <button 
            className={`px-6 py-2 rounded-lg font-semibold transition w-40 ${
              contrast 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`} 
            onClick={handleContrast}
          >
            {contrast ? (T.lightMode || 'Light Mode') : (T.darkMode || 'Dark Mode')}
          </button>
        </div>
      </div>
      
      {/* Preview section */}
      <div className={`w-full rounded-xl p-4 shadow-lg ${
        contrast 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200'
      }`}>
        <h3 className={`font-semibold text-sm mb-2 ${contrast ? 'text-gray-200' : 'text-gray-700'}`}>
          {T.preview}
        </h3>
        <div className={`text-sm ${contrast ? 'text-gray-300' : 'text-gray-600'}`}>
          {T.adjustFont}
        </div>
      </div>
    </section>
  );
}