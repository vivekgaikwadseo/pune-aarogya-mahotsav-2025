import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date("2025-10-19T09:00:00+05:30").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeSegments = [
    { value: timeLeft.days, label: 'दिवस' },
    { value: timeLeft.hours, label: 'तास' },
    { value: timeLeft.minutes, label: 'मिनिटे' },
    { value: timeLeft.seconds, label: 'सेकंद' }
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4">
      {timeSegments.map((segment, index) => (
        <div key={index} className="bg-hero-box-bg rounded-lg p-2 md:p-3 text-center border border-hero-blue">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-blue">
            {segment.value}
          </div>
          <div className="text-sm md:text-base text-hero-navy mt-2">
            {segment.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
