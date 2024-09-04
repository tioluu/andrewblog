// src/components/TypingText.js
import React, { useEffect, useState } from 'react';

const TypingText = ({ text, speed = 10 }) => {
  if (typeof text !== 'string') {
    throw new Error('Invalid text prop. Expected a string.');
  }

  if (typeof speed !== 'number' || speed <= 0) {
    throw new Error('Invalid speed prop. Expected a positive number.');
  }

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let typingInterval;

    try {
      typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          setDisplayedText(text); // Ensure the final text is correct
          clearInterval(typingInterval);
        }
      }, speed);
    } catch (error) {
      console.error('Error setting typing interval:', error);
    }

    return () => {
      try {
        clearInterval(typingInterval);
      } catch (error) {
        console.error('Error clearing typing interval:', error);
      }
    };
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingText;