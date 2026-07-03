import "@/scss/globals.css";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono, Raleway } from "next/font/google";
import React, { useEffect, useState, createContext } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
  display: "swap",
});

export const ReducedMotionContext = createContext(false);

export default function App({ Component, pageProps }: AppProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    if (reducedMotion) return;
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      glow.remove();
    };
  }, [reducedMotion]);

  return (
    <ReducedMotionContext.Provider value={reducedMotion}>
      {/* This forces the Next.js fonts directly into your global :root scope */}
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
          --font-mono: ${jetbrainsMono.style.fontFamily};
          --font-heading: ${raleway.style.fontFamily};
        }
      `}</style>
      
      {/* You no longer need the long font variable string here! */}
      <div>
        <Component {...pageProps} />
      </div>
    </ReducedMotionContext.Provider>
  );
}
