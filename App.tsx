
import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';

interface AnimatedItemProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g. delay-100
  duration?: string; // Tailwind duration class e.g. duration-500
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ isVisible, children, className, duration = 'duration-1000' }) => {
  return (
    <div className={`transition-opacity ease-in-out ${duration} ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`}>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean[]>([false, false, false, false, false]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []; // Changed NodeJS.Timeout to ReturnType<typeof setTimeout>
    const delays = [0, 400, 800, 1200, 1600]; // Staggered delays for items

    delays.forEach((delay, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibility(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, delay)
      );
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-[#F5F5F5] font-['Montserrat',_sans-serif] overflow-hidden">
      <main className="flex-grow flex flex-col items-center justify-center p-6 space-y-8 md:space-y-10 text-center">
        <AnimatedItem isVisible={visibility[0]} className="w-48 h-auto md:w-64">
          <Logo />
        </AnimatedItem>

        <AnimatedItem isVisible={visibility[1]}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider">
            Fake Company Ltd.
          </h1>
        </AnimatedItem>

        <AnimatedItem isVisible={visibility[2]}>
          <p className="text-lg sm:text-xl md:text-2xl uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            Our Business Is Business.
          </p>
        </AnimatedItem>

        <AnimatedItem isVisible={visibility[3]} className="pt-4">
          <button 
            className="px-8 py-3 uppercase border-2 border-[#F5F5F5] text-[#F5F5F5] 
                       hover:border-gray-500 hover:text-gray-500
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                       transition-colors duration-500 ease-in-out tracking-wider text-sm sm:text-base"
            onClick={() => console.log("Acknowledge button clicked. No actual action.")}
          >
            Acknowledge
          </button>
        </AnimatedItem>
      </main>

      <AnimatedItem isVisible={visibility[4]} className="pb-6 pt-4" duration="duration-500">
        <footer className="w-full text-center">
          <p className="text-xs text-[#F5F5F5] opacity-50 uppercase tracking-normal px-4">
            © 1923 - {currentYear} Fake Company Ltd. | Registered in The Cayman Islands | All Rights Reserved.
          </p>
        </footer>
      </AnimatedItem>
    </div>
  );
};

export default App;
