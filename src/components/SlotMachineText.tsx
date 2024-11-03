import React, { useState, useEffect } from 'react';

interface SlotMachineTextProps {
  finalText: string;
  isSpinning: boolean;
  type: 'mentor' | 'mentee';
}

const names = {
  mentor: [
    'Alice Johnson',
    'Bob Williams',
    'Charlie Davis',
    'David Anderson',
    'Emma Thompson',
    'Frank Miller',
    'Grace Wilson',
    'Henry Martinez',
  ],
  mentee: [
    'Sophie Parker',
    'Tom Richardson',
    'Uma Patel',
    'Victor Rodriguez',
    'Wendy Chang',
    'Xavier Lewis',
    'Yara Ahmed',
    'Zack Thompson'
  ],
};

export function SlotMachineText({
  finalText,
  isSpinning,
  type,
}: SlotMachineTextProps) {
  const [displayText, setDisplayText] = useState(finalText);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    if (isSpinning) {
      const id = window.setInterval(() => {
        const randomName =
          names[type][Math.floor(Math.random() * names[type].length)];
        setDisplayText(randomName);
      }, 50);
      setIntervalId(id);

      setTimeout(() => {
        if (id) clearInterval(id);
        setDisplayText(finalText);
      }, 2000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isSpinning, finalText, type]);

  return (
    <div className={`font-black text-xl text-blue-900 w-full break-words px-4 ${isSpinning ? 'animate-bounce' : ''}`}>
      {displayText || '...'}
    </div>
  );
}