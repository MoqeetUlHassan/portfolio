import { useState, useEffect, useRef } from 'react';

export function useInView(rootMargin = '200px') {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { rootMargin });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
