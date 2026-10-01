import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }) => {
  const location = useLocation();
  const [animClass, setAnimClass] = useState('page-enter-slide-left');
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    // Alternate direction between page visits for cinematic feel
    const routeHash = Array.from(location.pathname).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const directionClass = routeHash % 2 === 0 ? 'page-enter-slide-left' : 'page-enter-slide-right';
    
    setAnimClass(directionClass);
    setKey(location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={key} className={`page-transition-container ${animClass}`}>
      {children}
    </div>
  );
};
