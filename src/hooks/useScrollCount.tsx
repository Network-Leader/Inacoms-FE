import { useRef, useEffect, useCallback } from "react";

const useScrollCount = (end: any, start = 0, duration = 3000) => {
  const element = useRef<any>();
  const observer = useRef<any>();
  // let observer: any;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]: any) => {
      const { current } = element;
      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(counter);
            observer.current.disconnect(element.current);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, element]
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.8 });
      observer.current.observe(element.current);
    }

    return () => observer && observer.current.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
