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
        <title>Rehan Sanjay — Voice AI & Backend Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Rehan Sanjay — voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat, jambonz, drachtio and Cosmo, including one in LiveKit's core connection pool and the jambonz serializer Pipecat was missing, which jambonz paid me to build. I measure what voice agents actually do: turn-end latency against ground truth, half-open websockets, 75 Pipecat plugins checked nightly." />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="canonical" href="https://rehansanjay-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rehan Sanjay — Voice AI & Backend Engineer" />
        <meta property="og:description" content="Voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat and jambonz, and published measurements of turn-end latency, half-open websockets and plugin health." />
        <meta property="og:url" content="https://rehansanjay-portfolio.vercel.app" />
        <meta property="og:image" content="https://rehansanjay-portfolio.vercel.app/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rehan Sanjay — Voice AI & Backend Engineer" />
        <meta name="twitter:description" content="Voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat and jambonz, and published measurements of turn-end latency, half-open websockets and plugin health." />
        <meta name="twitter:creator" content="@RehanSanjay_" />
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
