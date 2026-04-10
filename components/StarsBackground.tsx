'use client';

import { useEffect, useState } from 'react';

export default function StarsBackground() {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      duration: `${Math.random() * 5 + 3}s`,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            // @ts-ignore
            '--duration': star.duration,
          }}
        />
      ))}
    </div>
  );
}
