import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "The only bad workout is the one that didn't happen.",
    author: "Unknown"
  },
  {
    text: "Fitness is not about being better than someone else. It's about being better than you used to be.",
    author: "Khloe Kardashian"
  },
  {
    text: "Take care of your body. It's the only place you have to live.",
    author: "Jim Rohn"
  },
  {
    text: "The hard days are the best because that's when champions are made.",
    author: "Gabrielle Reece"
  },
  {
    text: "The only way to define your limits is by going beyond them.",
    author: "Arthur C. Clarke"
  }
];

const QuoteRotator = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <p className="text-xl text-white italic mb-2 max-w-2xl">"{quotes[currentQuote].text}"</p>
          <p className="text-indigo-300">— {quotes[currentQuote].author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuoteRotator;