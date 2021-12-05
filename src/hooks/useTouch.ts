import { useRef } from 'react';

const useTouch = () => {
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const deltaX = useRef<number>(0);
  const deltaY = useRef<number>(0);
  const time = useRef<number>(0);

  const reset = () => {
    startX.current = 0;
    startY.current = 0;
    deltaX.current = 0;
    deltaY.current = 0;
    time.current = 0;
  };

  const start = (event: React.TouchEvent | TouchEvent) => {
    reset();
    time.current = new Date().getTime();
    startX.current = event.touches[0].clientX;
    startY.current = event.touches[0].clientY;
  };

  const move = (event: React.TouchEvent | TouchEvent) => {
    if (!time.current) {
      return {
        diffX: 0,
        diffY: 0,
      };
    }
    const prevDeltaX = deltaX.current;
    const prevDeltaY = deltaY.current;
    deltaX.current = event.touches[0].clientX - startX.current;
    deltaY.current = event.touches[0].clientY - startY.current;
    return {
      diffX: deltaX.current - prevDeltaX,
      diffY: deltaY.current - prevDeltaY,
    };
  };

  const end = () => {
    const tempDeltaX = deltaX.current;
    const tempDeltaY = deltaY.current;
    const timediff = time.current ? new Date().getTime() - time.current : 0;
    reset();
    return {
      deltaX: tempDeltaX,
      deltaY: tempDeltaY,
      time: timediff,
    };
  };

  const getDelta = () => {
    return {
      deltaX: deltaX.current,
      deltaY: deltaY.current,
    };
  };

  return {
    move,
    start,
    end,
    getDelta,
  };
};

export default useTouch;
