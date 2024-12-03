'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}

interface CountdownTimerProps {
   targetDate: string; // Định dạng ISO string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
   const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   function calculateTimeLeft(): TimeLeft {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
         return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
         };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Thời gian hết hạn
   }

   return (
      <div className="flex items-center gap-2">
         {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col justify-center items-center gap-3">
               <div className="bg-[#f2f4f6] dark:bg-[#222222] rounded-md font-bold px-6 py-8 text-4xl">
                  - {value < 10 ? `0${value}` : value}
               </div>
               <div className="text-neutral-600 text-2xl">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
               </div>
            </div>
         ))}
      </div>
   );
};

export default CountdownTimer;