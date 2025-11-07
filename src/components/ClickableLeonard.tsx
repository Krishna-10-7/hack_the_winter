import { useState } from 'react';

interface ClickableLeonardProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ClickableLeonard({ src, alt, className }: ClickableLeonardProps) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Activate secret after 3 clicks
    if (newCount >= 3) {
      // Create a proper link element and trigger click (same as Learn More button)
      const link = document.createElement('a');
      link.href = '/secret/';
      link.style.position = 'absolute';
      link.style.left = `${e.clientX}px`;
      link.style.top = `${e.clientY}px`;
      link.style.width = '1px';
      link.style.height = '1px';
      link.style.opacity = '0';
      link.style.pointerEvents = 'none';
      
      document.body.appendChild(link);
      
      // Trigger the click to activate Astro's view transition
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: e.clientX,
        clientY: e.clientY
      });
      
      link.dispatchEvent(clickEvent);
      
      // Clean up
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 100);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-pointer transition-transform hover:scale-105`}
      onClick={handleClick}
      title={clickCount > 0 ? `${clickCount}/3 clicks` : 'Click me...'}
    />
  );
}