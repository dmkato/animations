import React, { useState } from 'react';
import './style.scss';
import Controls from '../controls';
import useClock from '../../hooks/useClock';

const controls = {
  magnitude: {
    name: 'Magnitude',
    max: 1000,
    default: 100,
  },
  size: {
    name: 'Size',
    max: 1000,
    default: 100,
  },
  speed: {
    name: 'Speed',
    max: 100,
    default: 50,
  },
};

const SinCircle: React.FC = () => {
  const clock: number = useClock();
  const [options, setOptions] = useState({
    magnitude: 10,
    size: 20,
    speed: 10,
  });

  const getRadius = () => {
    const { size, magnitude, speed } = options;
    return Math.sin(clock / speed) * magnitude + size;
  };

  const handleChange = (key: string, val: number | [number, number]) => {
    setOptions({ ...options, [key]: val });
  };

  return (
    <div className="container">
      <svg width="1000px" height="666px">
        <circle cx="500" cy="333" r={getRadius()} fill="grey" />
      </svg>
      <Controls controls={controls} onChange={handleChange} />
    </div>
  );
};

export default SinCircle;
