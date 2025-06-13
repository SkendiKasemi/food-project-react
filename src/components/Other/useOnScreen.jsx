import { useState, useEffect, useRef } from 'react';

export function useOnScreen(options) {
  const ref = useRef();
  const [isOnScreen, setOnScreen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isOnScreen];
}
