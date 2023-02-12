import { useEffect, useRef, useState } from 'react';
const useScrollLock = (lock?: boolean) => {
  const [scrollLocked, setScrollLocked] = useState(lock || false);
  const prevBodyStyle = useRef<string>();
  const lockScroll = () => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const scrollBarHeight =
      window.innerHeight - document.documentElement.clientHeight;
    prevBodyStyle.current = document.body.getAttribute('style') ?? '';
    const currentPaddingRight = window.getComputedStyle(
      document.body
    ).paddingRight;
    const newPaddingRight = `${parseInt(currentPaddingRight) + scrollBarWidth}`;
    const currentPaddingBottom = window.getComputedStyle(
      document.body
    ).paddingBottom;
    const newPaddingBottom = `${
      parseInt(currentPaddingBottom) + scrollBarHeight
    }`;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${newPaddingRight}px`;
    document.body.style.paddingBottom = `${newPaddingBottom}px`;
  };

  const unLockScroll = () => {
    document.body.setAttribute('style', prevBodyStyle.current ?? '');
  };

  useEffect(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unLockScroll();
    }
  }, [scrollLocked]);

  useEffect(() => {
    setScrollLocked(!!lock);
  }, [lock]);

  return [scrollLocked] as const;
};
export default useScrollLock;
