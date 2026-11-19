import React, { useState, useEffect } from 'react';

export const LiveDhakaClock: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Dhaka (Asia/Dhaka)
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      setTimeString(timeFormatter.format(now));
      setDateString(dateFormatter.format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs uppercase text-typography-muted tracking-wider">
          Dhaka, Bangladesh · UTC+6 BST
        </span>
      </div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight text-typography-primary font-display">
        {timeString || '12:00:00 PM'}
      </div>
      <div className="text-xs text-typography-secondary">
        {dateString || 'Today'} · 23.8103° N, 90.4125° E
      </div>
    </div>
  );
};
