import React from 'react';

interface ConfettiProps {
  show: boolean;
}

export function Confetti({ show }: ConfettiProps) {
  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
      <div className="text-5xl animate-bounce">⭐</div>
    </div>
  );
}