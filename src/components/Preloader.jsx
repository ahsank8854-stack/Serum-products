import React, { useState, useEffect } from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scrolling during preloader loading
    document.body.style.overflow = 'hidden';

    // Simulate luxury progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
          }, 650);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center preloader-screen"
      style={{
        backgroundColor: '#122419',
        color: '#FDFBF7',
        zIndex: 99999999,
        inset: 0,
        width: '100vw',
        height: '100vh',
        height: '100dvh',
        transition: 'opacity 0.65s cubic-bezier(0.25, 1, 0.5, 1), visibility 0.65s ease',
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? 'none' : 'auto',
        visibility: progress === 100 && !loading ? 'hidden' : 'visible'
      }}
    >
      <div className="text-center p-4">
        
        {/* Animated Leaf Emblem */}
        <div
          className="mb-4 d-inline-flex p-4 rounded-circle border border-secondary"
          style={{
            background: 'rgba(27, 56, 40, 0.6)',
            boxShadow: '0 0 30px rgba(196, 154, 69, 0.25)',
            animation: 'pulseGlow 2s infinite ease-in-out'
          }}
        >
          <Leaf size={48} className="text-warning" />
        </div>

        {/* Brand Name */}
        <h1
          className="font-serif display-4 text-white mb-2"
          style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
        >
          VERDANT
        </h1>
        <div
          className="small text-warning fw-bold mb-4"
          style={{ letterSpacing: '0.3em', fontSize: '0.75rem' }}
        >
          LUXURY BOTANICAL RITUALS
        </div>

        {/* Progress Bar Container */}
        <div className="mx-auto" style={{ maxWidth: '280px' }}>
          <div
            className="progress rounded-pill mb-2 bg-dark border border-secondary"
            style={{ height: '6px' }}
          >
            <div
              className="progress-bar rounded-pill"
              role="progressbar"
              style={{
                width: `${progress}%`,
                backgroundColor: 'var(--color-accent)',
                transition: 'width 0.1s linear'
              }}
            />
          </div>

          <div className="d-flex justify-content-between small text-muted opacity-75" style={{ fontSize: '0.75rem' }}>
            <span>Crafting Formulations...</span>
            <span className="fw-bold text-white">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
