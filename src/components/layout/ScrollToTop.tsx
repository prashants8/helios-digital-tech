import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const shouldSmoothScroll =
      typeof state === "object" &&
      state !== null &&
      "scrollToTop" in state &&
      state.scrollToTop === "smooth";

    window.scrollTo({
      top: 0,
      behavior: shouldSmoothScroll ? "smooth" : "auto",
    });
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
