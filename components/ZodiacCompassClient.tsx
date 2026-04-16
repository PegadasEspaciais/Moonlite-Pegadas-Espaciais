'use client';

import { useState } from 'react';

export default function ZodiacCompassClient() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center relative group">
      {imgError ? (
        <div className="text-eternal-gold/70 text-center font-serif tracking-widest">
          <p>✨ Bússola Zodíaco ✨</p>
        </div>
      ) : (
        <img
          src="https://celebrated-moonbeam-21c681.netlify.app/assets/banner-a38175d0.png"
          alt="Bússola Zodíaco"
          className="w-full h-full max-w-[500px] max-h-[500px] object-contain compass-spin"
          onError={() => setImgError(true)}
        />
      )}

      <style>{`
        .compass-spin {
          animation: spin-slow 20s linear infinite;
        }
        
        .group:hover .compass-spin {
          animation-play-state: paused;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

