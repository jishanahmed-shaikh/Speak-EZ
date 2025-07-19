import { TRANSLATIONS } from '@/data/content';

interface ProfileViewProps {
  selectedLanguage: string;
}

export function ProfileView({ selectedLanguage }: ProfileViewProps) {
  const T = TRANSLATIONS[selectedLanguage];
  return (
    <section className="flex flex-col gap-4 items-center justify-center h-full animate-fade-in">
      <h2 className="text-xl font-bold text-green-600 flex items-center gap-2">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' /></svg>
        {T.profile}
      </h2>
      <div className="bg-blue-50 rounded-xl p-4 w-full flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center mb-2">
          <svg xmlns='http://www.w3.org/2000/svg' className='w-10 h-10 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' /></svg>
        </div>
        <div className="font-semibold text-lg text-green-700">Guest User</div>
        <div className="text-gray-500 text-sm">Welcome to Speak-EZ!</div>
      </div>
    </section>
  );
}