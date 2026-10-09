import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-royalBlue text-white shadow-glow-blue hover:bg-royalBlue-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-skyBlue focus:ring-offset-2 focus:ring-offset-midnight"
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
