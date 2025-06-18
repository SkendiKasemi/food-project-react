import { useRef, useState, useEffect } from 'react';
import './reveal.css'; 

export default function Reveal({
  children,
  threshold = 0.1,
  rootMargin = '0px',
}) {
  const ref = useRef();
  // track the current “phase” so we can apply different CSS classes
  const [phase, setPhase] = useState('hidden');
  // possible phases: 'hidden', 'enter-bottom', 'enter-top', 'exit-bottom', 'exit-top'

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, boundingClientRect, rootBounds } = entry;

          if (isIntersecting) {
            // Element is entering view
            // If it crossed from below (its top is below root’s bottom)
            if (boundingClientRect.top > rootBounds.bottom) {
              setPhase('enter-bottom');
            }
            // If it crossed from above (its bottom is above root’s top)
            else if (boundingClientRect.bottom < rootBounds.top) {
              setPhase('enter-top');
            }
            // Default to simple fade-in
            else {
              setPhase('enter-bottom');
            }
          } else {
            // Element is leaving view
            // If its top moved above the viewport top
            if (boundingClientRect.top < rootBounds.top) {
              setPhase('exit-top');
            }
            // If its bottom moved below the viewport bottom
            else if (boundingClientRect.bottom > rootBounds.bottom) {
              setPhase('exit-bottom');
            } else {
              setPhase('exit-bottom');
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={`reveal reveal--${phase}`}>
      {children}
    </div>
  );
}
