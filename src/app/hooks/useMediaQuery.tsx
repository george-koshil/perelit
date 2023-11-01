import { useState, useEffect } from 'react';

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};


const useMediaQuery = (breakpoint: "sm" | "md" | "lg" | "xl" | "2xl") => {
  const [matches, setMatches] = useState(false);

  const query = breakpoints[breakpoint];

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    setMatches(mediaQueryList.matches);

    const updateMatches = (event: any) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', updateMatches);

    return () => {
      mediaQueryList.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
