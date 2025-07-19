import { TRANSLATIONS } from '@/data/content';

interface AboutViewProps {
  selectedLanguage: string;
}

export function AboutView({ selectedLanguage }: AboutViewProps) {
  const T = TRANSLATIONS[selectedLanguage];

  return (
    <section className="flex flex-col items-center gap-6 p-6 h-full animate-fade-in overflow-y-auto">
      <div className="text-center mb-4 w-full max-w-2xl">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-8 h-8 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span className="text-blue-600">
            SpeakEZ
          </span>
        </h2>
        <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto"></div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
          </svg>
          <span className="text-blue-600 font-bold">
            {T.ourMission}
          </span>
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {T.missionText}
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <span className="text-blue-600 font-bold">
            {T.keyFeatures}
          </span>
        </h3>
        <div className="grid gap-3">
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <span className="text-gray-700">{T.feature1}</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <span className="text-gray-700">{T.feature2}</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <span className="text-gray-700">{T.feature3}</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <span className="text-gray-700">{T.feature4}</span>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
            <span className="text-gray-700">{T.feature5}</span>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-blue-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-blue-600 font-bold">
            {T.accessibilityFirst}
          </span>
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {T.accessibilityText}
        </p>
      </div>

      <div className="bg-blue-100/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/50 shadow-lg text-center mt-2 w-full max-w-2xl">
        <div className="text-sm text-gray-600">
          <div className="font-bold text-lg mb-2">
            <span className="text-blue-600">
              {T.appVersion}
            </span>
          </div>
          <div className="text-gray-700 font-medium">{T.appTagline}</div>
        </div>
      </div>
    </section>
  );
}