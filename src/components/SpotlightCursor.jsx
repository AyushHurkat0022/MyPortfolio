import { useEffect, useState } from 'react';
import './SpotlightCursor.css';

const SpotlightCursor = ({ color = 'rgba(45, 127, 226, 0.2)', size = 20 }) => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Gradient spotlight */}
      <div
        className="spotlight-overlay"
        style={{
          '--mouse-x': position.x,
          '--mouse-y': position.y,
          '--spotlight-color': color,
        }}
      />

      {/* Solid circle cursor */}
      <div
        className="custom-cursor"
        style={{
          '--cursor-x': position.x,
          '--cursor-y': position.y,
          '--cursor-color': color,
          '--cursor-size': `${size}px`,
        }}
      />
    </>
  );
};

export default SpotlightCursor;
