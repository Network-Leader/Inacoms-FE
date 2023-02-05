import { useState, useMemo, useEffect } from "react";
import { throttle } from "lodash";

export const useScrollPercent = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  //   var scrollHeight = document.querySelector('.sec01').offsetHeight;
  //   var scrollRealHeight = window.innerHeight;
  //   var winScrollTop = window.pageYOffset;
  //   var scrollPercents = (winScrollTop / scrollRealHeight) * 100;
  // var textPercent = Math.round(scrollPercent);
  const throttleScroll = useMemo(
    () =>
      throttle(() => {
        setScrollPercent(
          (window.pageYOffset / document.documentElement.scrollHeight) * 100
        );
      }, 0),
    []
  );
  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
  }, [throttleScroll]);

  return scrollPercent;
};
