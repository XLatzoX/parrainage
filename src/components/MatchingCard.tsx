import React from 'react';
import { SlotMachineText } from './SlotMachineText';

interface MatchingCardProps {
  title: string;
  type: 'mentor' | 'mentee';
  isSpinning: boolean;
  name: string;
}

export function MatchingCard({ title, type, isSpinning, name }: MatchingCardProps) {
  const rotateClass = type === 'mentor' ? '-rotate-1' : 'rotate-1';

  return (
    <div className={`flex-1 min-w-[280px] bg-blue-100 brutal-shadow rounded-none p-6 text-center transform ${rotateClass} hover:rotate-0 transition-transform`}>
      <h2 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight">{title}</h2>
      <div className="brutal-shadow bg-white p-6 min-h-[120px] w-full flex items-center justify-center transform hover:scale-105 transition-transform">
        <SlotMachineText
          finalText={name}
          isSpinning={isSpinning}
          type={type}
        />
      </div>
    </div>
  );
}