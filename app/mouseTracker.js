"use client"
import { useEffect } from 'react'
import { useState } from 'react' 
 
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY})
    console.log(mousePosition.x, mousePosition.y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return mousePosition;
};