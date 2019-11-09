import { useState, useEffect } from 'react';

function useClock(): number {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    });
  }, [time]);
  return time;
}

export default useClock;
