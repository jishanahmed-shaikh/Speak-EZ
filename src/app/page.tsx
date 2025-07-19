'use client';

import React, { useState, useEffect } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { useConfetti } from "@/hooks/useConfetti";
import "./globals.css";
import { TRANSLATIONS } from "@/data/content";

import { MainView } from "@/components/views/MainView";
import { FavoritesView } from "@/components/views/FavoritesView";
import { ProfileView } from "@/components/views/ProfileView";
import { AccessibilityView } from "@/components/views/AccessibilityView";
import { EmergencyView } from "@/components/views/EmergencyView";

import { BottomNav } from "@/components/BottomNav";
import { Header } from "@/components/Header";
import { Confetti } from "@/components/Confetti";
import { SOSModal } from "@/components/SOSModal";
import { ActiveTab } from "@/types";
import LottieSplash from "@/components/LogoAnimation";
import { AboutView } from "@/components/views/AboutView";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("main");
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(1);
  const [contrast, setContrast] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [sosOpen, setSosOpen] = useState(false);
  const [sosFeedback, setSosFeedback] = useState("");

  const { show: showConfetti, trigger: triggerConfetti } = useConfetti();
  const { favorites, handleFavorite, handleUnfavorite, isFavorited } = useFavorites(triggerConfetti);

  const T = TRANSLATIONS[selectedLanguage] || TRANSLATIONS.en;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  const handleSpeak = (text: string) => {
    if (!text.trim() || typeof window === "undefined" || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utter = new window.SpeechSynthesisUtterance(text);

    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang.startsWith(selectedLanguage));
      if (voice) utter.voice = voice;
      window.speechSynthesis.speak(utter);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      setVoice();
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', setVoice, { once: true });
    }
  };

  const handleFontSize = (size: 'large' | 'normal' | 'small') => {
    if (size === 'large') setFontSize(1.2);
    else if (size === 'small') setFontSize(0.85);
    else setFontSize(1);
  };

  const handleContrast = () => setContrast(c => !c);

  const handleSOSCopy = () => {
    setSosFeedback("Copied emergency message!");
    setTimeout(() => {
      setSosFeedback("");
      setSosOpen(false);
    }, 1500);
  };

  const handleSOSCall = () => {
    setSosFeedback("Calling for help...");
    setTimeout(() => {
      setSosFeedback("");
      setSosOpen(false);
    }, 2000);
  };

  const rootClass = `${contrast ? 'bg-black text-white' : 'bg-[#eaffea] text-gray-900'} transition-colors duration-300`;

  const renderActiveView = () => {
    switch (activeTab) {
      case 'main':
        return (
          <MainView
            input={input}
            setInput={setInput}
            handleSpeak={handleSpeak}
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
            handleUnfavorite={handleUnfavorite}
            selectedLanguage={selectedLanguage}
            contrast={contrast}
          />
        );
      case 'favorites':
        return (
          <FavoritesView
            favorites={favorites}
            handleSpeak={handleSpeak}
            handleUnfavorite={handleUnfavorite}
            isFavorited={isFavorited}
            selectedLanguage={selectedLanguage}
          />
        );
      case 'about':
        return <AboutView selectedLanguage={selectedLanguage} />;
      case 'access':
        return (
          <AccessibilityView
            fontSize={fontSize}
            handleFontSize={handleFontSize}
            contrast={contrast}
            handleContrast={handleContrast}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        );
      case 'sos':
        return (
          <EmergencyView
            setSosOpen={setSosOpen}
            sosFeedback={sosFeedback}
            translations={T}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <Confetti show={showConfetti} />
      <SOSModal
        open={sosOpen}
        onClose={() => setSosOpen(false)}
        message={T.emergencyMessages?.[0] || ''}
        onCopy={handleSOSCopy}
        translations={T}
      />

      <div
        className={`w-[375px] max-w-full rounded-[2rem] shadow-2xl border-4 border-black flex flex-col min-h-[750px] max-h-[800px] mx-auto relative overflow-hidden ${rootClass}`}
        style={{ fontSize: `${fontSize}em` }}
      >
        {showSplash ? (
          <div className={`flex-1 ${contrast ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700' : 'bg-[#eaffea]'} flex items-center justify-center`}>
            <div className="text-center">
              <div className="mb-8 animate-bounce">
                <div className="w-48 h-48 mx-auto bg-white bg-opacity-30 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <img
                    src="/Icon.jpg"
                    alt="Speak-EZ Logo"
                    className="w-40 h-40 object-contain"
                  />
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-4 animate-pulse">
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-gray-700 bg-clip-text text-transparent">
                  Speak-EZ
                </span>
              </h1>

              <div className="flex space-x-2 justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Header selectedLanguage={selectedLanguage} />
            <main className="flex-1 flex flex-col gap-3 px-4 py-2 w-full mx-auto overflow-y-auto">
              {renderActiveView()}
            </main>
            <BottomNav
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedLanguage={selectedLanguage}
            />
          </>
        )}
      </div>
    </div>
  );
}