import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(129, 140, 248, 0.2)",
      mixBlendMode: "difference" as "difference"
    }
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('h1, h2, h3, a, button');
    
    const mouseEnter = () => setCursorVariant('text');
    const mouseLeave = () => setCursorVariant('default');

    textElements.forEach(element => {
      element.addEventListener('mouseenter', mouseEnter);
      element.addEventListener('mouseleave', mouseLeave);
    });

    return () => {
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', mouseEnter);
        element.removeEventListener('mouseleave', mouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor-dot fixed top-0 left-0 w-8 h-8 bg-indigo-500 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorEffect;