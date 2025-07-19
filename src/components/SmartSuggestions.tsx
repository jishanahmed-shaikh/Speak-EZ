'use client';

import React from "react";

interface SmartSuggestionsProps {
  suggestions?: string[];
  onSelect?: (phrase: string) => void;
}

function getDefaultSuggestions(): string[] {
  const hour = new Date().getHours();
  if (hour < 12) {
    return ["Good morning!", "Can I have breakfast?", "How are you?"];
  } else if (hour < 18) {
    return ["Good afternoon!", "Can I have lunch?", "Thank you!"];
  } else {
    return ["Good evening!", "Can I have dinner?", "Excuse me!"];
  }
}

const SmartSuggestions: React.FC<SmartSuggestionsProps> = ({ suggestions, onSelect }) => {
  const phrases = suggestions && suggestions.length > 0 ? suggestions : getDefaultSuggestions();

  return (
    <div className="flex gap-2 w-full overflow-x-auto pb-1">
      {/* TODO: Integrate AI-based suggestions via Gemini/GPT-4 API */}
      {phrases.map((phrase, idx) => (
        <button
          key={idx}
          className="bg-gray-200 hover:bg-blue-200 text-gray-900 rounded-lg px-4 py-2 min-w-[44px] min-h-[44px] text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap"
          onClick={() => onSelect && onSelect(phrase)}
          aria-label={`Suggest: ${phrase}`}
        >
          {phrase}
        </button>
      ))}
    </div>
  );
};

export default SmartSuggestions; 