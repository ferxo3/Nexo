// pages/_app.js
import "@/styles/globals.css"; // Importa tus estilos globales
import Nav3 from "@/components/headers/component/Nav3"; // Ajusta la ruta según tu estructura de carpetas
import Footer2 from "@/components/footers/Footer2"; // Ajusta según el footer que estés usando
import Context from "@/context/Context";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect } from "react";
import anime from "animejs";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Aquí puedes incluir cualquier código de animación o inicialización que necesites
    const elements = document.querySelectorAll("[data-anime]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 800,
          });
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Context>
      <Nav3 /> {/* El menú estará presente en todas las páginas */}
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <Footer2 /> {/* Asegúrate de usar el footer correcto */}
    </Context>
  );
}

export default MyApp;