import React from 'react';
import { TRANSLATIONS } from '@/data/content';
import { ActiveTab } from '@/types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedLanguage: string;
  isDark?: boolean;
}

type NavButtonProps = {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  activeClass?: string;
  onClick: () => void;
  pulse?: boolean;
  isDark?: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ 
  label, 
  icon, 
  isActive, 
  activeClass, 
  onClick, 
  pulse, 
  isDark 
}) => (
  <button
    className={`
      group relative flex flex-col items-center justify-center p-3 flex-1 h-16
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 
      ${isDark ? 'focus:ring-white/20 focus:ring-offset-gray-900' : 'focus:ring-blue-500/20 focus:ring-offset-white'}
      ${isActive 
        ? `${activeClass} transform scale-110` 
        : isDark 
          ? 'text-gray-400 hover:text-gray-200' 
          : 'text-gray-500 hover:text-gray-700'
      }
      ${pulse && isActive ? 'animate-pulse' : ''}
      hover:scale-105 active:scale-95
    `}
    onClick={onClick}
  >
    {/* Background glow effect */}
    <div 
      className={`
        absolute inset-0 rounded-2xl transition-all duration-300
        ${isActive 
          ? isDark 
            ? 'bg-gradient-to-b from-white/10 to-white/5 shadow-lg shadow-white/10' 
            : 'bg-gradient-to-b from-blue-50 to-blue-100/50 shadow-lg shadow-blue-500/20'
          : 'bg-transparent group-hover:bg-gradient-to-b group-hover:from-white/5 group-hover:to-white/2'
        }
      `}
    />
    
    {/* Icon container */}
    <div className="relative z-10 mb-1">
      {icon}
    </div>
    
    {/* Label - only show when active or showLabel is true */}
    {(isActive || false) && (
      <span className="relative z-10 text-xs font-medium tracking-wide">
        {label}
      </span>
    )}
    
    {/* Active indicator dot */}
    {isActive && (
      <div 
        className={`
          absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full
          ${isDark ? 'bg-white shadow-lg shadow-white/30' : 'bg-blue-600 shadow-lg shadow-blue-500/40'}
          animate-pulse
        `}
      />
    )}
  </button>
);

export function BottomNav({ 
  activeTab, 
  setActiveTab, 
  selectedLanguage, 
  isDark = false 
}: BottomNavProps) {
  const T = TRANSLATIONS[selectedLanguage];
  
  const navItems = [
    { 
      id: 'access', 
      label: T.access || 'Accessibility', 
      icon: (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          className='w-7 h-7 transition-transform duration-300 group-hover:scale-110' 
          fill='none' 
          viewBox='0 0 24 24' 
          stroke='currentColor' 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ), 
      activeClass: isDark ? 'text-blue-400' : 'text-blue-600' 
    },
    { 
      id: 'favorites', 
      label: T.favorites || 'Favourites', 
      icon: (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          className='w-7 h-7 transition-all duration-300 group-hover:scale-110' 
          fill={activeTab === 'favorites' ? 'currentColor' : 'none'} 
          viewBox='0 0 20 20' 
          stroke='currentColor'
          strokeWidth={2}
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z'/>
        </svg>
      ), 
      activeClass: isDark ? 'text-yellow-400' : 'text-yellow-500' 
    },
    { 
      id: 'main', 
      label: T.home || 'Home', 
      icon: (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          className='w-8 h-8 transition-transform duration-300 group-hover:scale-110' 
          fill='none' 
          viewBox='0 0 24 24' 
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6' />
        </svg>
      ), 
      activeClass: isDark ? 'text-green-400' : 'text-green-600' 
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          className='w-7 h-7 transition-transform duration-300 group-hover:scale-110' 
          fill='none' 
          viewBox='0 0 24 24' 
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ), 
      activeClass: isDark ? 'text-purple-400' : 'text-purple-600' 
    },
    { 
      id: 'sos', 
      label: T.sos || 'Emergency', 
      icon: (
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          className='w-7 h-7 transition-transform duration-300 group-hover:scale-110' 
          fill='none' 
          viewBox='0 0 24 24' 
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v2m0 4h.01M21 20H3a1 1 0 01-.894-1.447l9-16a1 1 0 011.788 0l9 16A1 1 0 0121 20z' />
        </svg>
      ), 
      activeClass: isDark ? 'text-red-400' : 'text-red-600', 
      pulse: true 
    },
  ];

  return (
    <nav 
      className={`
        relative w-full h-20 flex justify-around items-center px-4 py-2
        ${isDark 
          ? 'bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700' 
          : 'bg-gradient-to-t from-white via-gray-50 to-white border-t border-gray-200'
        }
        rounded-t-3xl shadow-2xl backdrop-blur-xl z-20
        before:absolute before:inset-0 before:rounded-t-3xl
        ${isDark 
          ? 'before:bg-gradient-to-t before:from-gray-900/90 before:to-gray-800/90' 
          : 'before:bg-gradient-to-t before:from-white/90 before:to-gray-50/90'
        }
        before:backdrop-blur-xl before:-z-10
      `}
    >
      <div 
        className={`
          absolute top-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-500
          ${isDark 
            ? 'from-blue-400 via-purple-400 to-pink-400' 
            : 'from-blue-600 via-purple-600 to-pink-600'
          }
        `}
        style={{
          width: '20%',
          transform: `translateX(${['access', 'favorites', 'main', 'about', 'sos'].indexOf(activeTab) * 100}%)`,
        }}
      />
      
      {navItems.map(item => (
        <NavButton
          key={item.id}
          label={item.label}
          icon={item.icon}
          isActive={activeTab === item.id}
          activeClass={item.activeClass}
          onClick={() => setActiveTab(item.id as ActiveTab)}
          pulse={item.pulse}
          isDark={isDark}
        />
      ))}
    </nav>
  );
}