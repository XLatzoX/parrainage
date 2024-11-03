import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { MatchingCard } from './components/MatchingCard';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [mentorName, setMentorName] = useState('');
  const [menteeName, setMenteeName] = useState('');

  const handlePairUp = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => {
      setMentorName('Dr. Smith');
      setMenteeName('John Doe');
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 flex items-center justify-center grid-pattern">
      <div className="w-full max-w-6xl bg-white brutal-shadow rounded-none p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="flex flex-col items-center mb-12 relative">
          <div className="bg-blue-100 brutal-shadow p-6 -rotate-3 mb-8 hover:rotate-3 transition-transform">
            <Users className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="title-brutal text-5xl md:text-6xl font-black py-3 text-center leading-none hover:scale-105 transition-transform cursor-default">
            Parrainage
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <MatchingCard
            title="Parrain"
            type="mentor"
            isSpinning={isSpinning}
            name={mentorName}
          />

          <div className="flex items-center justify-center px-4">
            <button
              onClick={handlePairUp}
              disabled={isSpinning}
              className={`
                bg-blue-100 text-blue-900 font-black px-8 py-4 text-xl
                brutal-shadow transform hover:-translate-y-1 
                hover:rotate-2 transition-all uppercase tracking-wider
                disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105
                ${isSpinning ? 'animate-pulse' : ''}
              `}
            >
              {isSpinning ? 'En cours...' : 'Parrainez'}
            </button>
          </div>

          <MatchingCard
            title="Filleul"
            type="mentee"
            isSpinning={isSpinning}
            name={menteeName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;