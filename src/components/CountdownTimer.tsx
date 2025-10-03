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

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-4">
      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md text-center border border-border">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary">
          {timeLeft.days}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">
          दिवस
        </div>
      </div>
      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md text-center border border-border">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary">
          {timeLeft.hours}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">
          तास
        </div>
      </div>
      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md text-center border border-border">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary">
          {timeLeft.minutes}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">
          मिनिटे
        </div>
      </div>
      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 md:p-4 shadow-md text-center border border-border">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-primary">
          {timeLeft.seconds}
        </div>
        <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">
          सेकंद
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
