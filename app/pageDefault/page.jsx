"use client";
import Header2 from "@/components/headers/Header2";
import Footer5 from "@/components/footers/Footer5";

export const metadata = {
  title: "Marketing Digital || Nexodia - Automatización con IA",
  description: "Ofrecemos soluciones de marketing digital, desarrollo web y automatización con inteligencia artificial.",
};

export default function Page() {
  return (
    <>
      <div className="page-wrapper">
        <Header2 />
        <div id="wrapper" className="wrap">
          {/* Aquí va el contenido principal de la página */}
          {/* Si necesitas agregar contenido nuevo, lo colocas aquí */}
        </div>
        <Footer5 />
      </div>
    </>
  );
}