import { useEffect } from "react";

const useClickOutside = (
  refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (Array.isArray(refs)) {
        if (
          !refs.some(
            (ref) => ref.current && ref.current.contains(event.target as Node)
          )
        ) {
          callback();
        }
      } else if (
        refs &&
        refs.current &&
        !refs.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [refs, callback]);
};

export default useClickOutside;
