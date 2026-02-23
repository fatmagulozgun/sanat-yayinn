import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {

    const scrollToTop = () => {

      // window
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      // gerçek scroll containerı bul
      const scrollable = document.querySelector("main");
      if (scrollable) {
        scrollable.scrollTop = 0;
      }

    };

    // render bittikten sonra çalışsın
    requestAnimationFrame(scrollToTop);

  }, [location.pathname]);

  return null;
}