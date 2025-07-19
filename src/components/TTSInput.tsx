'use client';

import React, { useRef, useState } from "react";

interface TTSInputProps {
  placeholder?: string;
  onSpeak?: (text: string) => void;
}

const TTSInput: React.FC<TTSInputProps> = ({ placeholder = "Type your message...", onSpeak }) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSpeak = () => {
    if (!text.trim()) return;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utter = new window.SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utter);
    }
    if (onSpeak) onSpeak(text);
  };

  return (
    <div className="flex gap-2 w-full items-center">
      <input
        ref={inputRef}
        type="text"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[44px]"
        placeholder={placeholder}
        value={text}
        onChange={e => setText(e.target.value)}
        aria-label="Type a message to speak"
        onKeyDown={e => {
          if (e.key === "Enter") handleSpeak();
        }}
      />
      <button
        className="bg-blue-600 text-white rounded-lg px-4 py-3 font-semibold text-lg min-w-[44px] min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleSpeak}
        aria-label="Speak typed message"
        disabled={!text.trim()}
      >
        Speak
      </button>
    </div>
  );
};

export default TTSInput; 