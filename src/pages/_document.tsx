import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Rehan Sanjay — voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat, jambonz, drachtio and Cosmo, including one in LiveKit's core connection pool and the jambonz serializer Pipecat was missing, which jambonz paid me to build. I measure what voice agents actually do: turn-end latency against ground truth, half-open websockets, 75 Pipecat plugins checked nightly." />
        <meta name="theme-color" content="#050505" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rehan Sanjay — Voice AI & Backend Engineer" />
        <meta property="og:description" content="Voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat and jambonz, and published measurements of turn-end latency, half-open websockets and plugin health." />
        <meta property="og:url" content="https://rehansanjay-portfolio.vercel.app" />
        <meta property="og:image" content="https://rehansanjay-portfolio.vercel.app/icon.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rehan Sanjay — Voice AI & Backend Engineer" />
        <meta name="twitter:description" content="Voice AI engineer. Thirty-three fixes merged into LiveKit Agents, Pipecat and jambonz, and published measurements of turn-end latency, half-open websockets and plugin health." />
        <meta name="twitter:creator" content="@RehanSanjay_" />

        {/* Preconnect fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rehan Sanjay",
              "url": "https://rehansanjay.com",
              "jobTitle": "Voice AI & Backend Engineer",
              "knowsAbout": ["Python", "asyncio", "Voice AI", "LiveKit", "Pipecat", "Twilio", "Deepgram", "TypeScript", "Next.js"],
              "sameAs": [
                "https://github.com/Rehansanjay",
                "https://www.linkedin.com/in/rehansanjayvenkatesan/",
                "https://x.com/RehanSanjay_"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}