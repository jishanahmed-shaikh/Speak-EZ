'use client';

import React, { useState } from "react";

const PHRASE_CATEGORIES = [
  {
    name: "Greetings",
    phrases: ["Hello!", "Good morning!", "Good afternoon!", "Good evening!", "How are you?", "Nice to meet you."]
  },
  {
    name: "Food",
    phrases: ["I'm hungry.", "Can I have some water?", "Can I have breakfast?", "Can I have lunch?", "Can I have dinner?", "I can't eat this."]
  },
  {
    name: "Emergency",
    phrases: ["I need help!", "Call 911!", "I'm lost.", "I feel sick.", "Please stay with me."]
  },
  {
    name: "Travel",
    phrases: ["Where is the restroom?", "Where is the bus stop?", "How much is the fare?", "I need directions.", "Can you help me?"]
  }
];

interface PhraseCategoriesProps {
  onSpeak?: (phrase: string) => void;
}

const PhraseCategories: React.FC<PhraseCategoriesProps> = ({ onSpeak }) => {
  const [activeTab, setActiveTab] = useState(0);
  const category = PHRASE_CATEGORIES[activeTab];

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-2 overflow-x-auto">
        {PHRASE_CATEGORIES.map((cat, idx) => (
          <button
            key={cat.name}
            className={`px-4 py-2 rounded-full min-w-[44px] min-h-[44px] text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap transition-colors ${activeTab === idx ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900 hover:bg-blue-200"}`}
            onClick={() => setActiveTab(idx)}
            aria-current={activeTab === idx}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {category.phrases.map((phrase, idx) => (
          <button
            key={idx}
            className="bg-gray-100 hover:bg-blue-100 text-gray-900 rounded-lg px-4 py-2 min-w-[44px] min-h-[44px] text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => onSpeak && onSpeak(phrase)}
            aria-label={`Speak: ${phrase}`}
          >
            {phrase}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhraseCategories; 