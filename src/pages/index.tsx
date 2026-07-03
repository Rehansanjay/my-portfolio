import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 400);
  };

  return (
    <div className="app">
      <Head>
        <title>Rehan Sanjay — Full Stack & AI Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rehan Sanjay — Full Stack & AI Engineer building production-grade AI products and scalable web applications. React, Next.js, Node.js, Python, TensorFlow." />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="canonical" href="https://rehansanjay.com" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
