import { useEffect } from 'react';

const useClickOutside = (
  ref: {
    current: HTMLDivElement | null;
  },
  outSideCallback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref?.current && !ref?.current?.contains(event.target)) {
        outSideCallback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, outSideCallback]);
};
export default useClickOutside;
