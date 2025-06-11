// src/components/ui/Reveal.jsx
import { useRef, useState, useEffect } from 'react';

export default function Reveal({
  children,
  threshold = 0.1,
  rootMargin = '0px',
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''}`}>
      {children}
    </div>
  );
}
