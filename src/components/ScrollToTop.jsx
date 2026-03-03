import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0); //sayfayı en üste kaydır
      document.body.scrollTop = 0; //body etiketini en üste kaydır
      document.documentElement.scrollTop = 0; //html etiketini en üste kaydır

      const scrollable = document.querySelector("main"); //main etiketini bul
      if (scrollable) { //main etiketini bul
        scrollable.scrollTop = 0; //main etiketini en üste kaydır
      }

    };
    requestAnimationFrame(scrollToTop);
  }, [location.pathname]); //url her değiştiğinde

  return null;
}