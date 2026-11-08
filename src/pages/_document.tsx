import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#050505" />

        {/* Description, OpenGraph and Twitter tags live in each page's own
            <Head>, so a shared link previews the page it points at. */}

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
              "url": "https://rehansanjay-portfolio.vercel.app",
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