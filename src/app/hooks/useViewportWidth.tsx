import { useEffect, useState } from 'react';

function useViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    // Add event listener to update viewportWidth when the window is resized
    window.addEventListener('resize', handleResize);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportWidth;
}

export default useViewportWidth;