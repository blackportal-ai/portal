import { useTypewriter } from '@/hooks/use-typewriter.tsx';
import React from 'react';

interface TypeWriterProps {
  text: string;
  speed?: number;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);
  return <span>{displayText}</span>
};