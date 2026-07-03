import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
        <meta name="description" content="Rehan Sanjay — Full Stack & AI Engineer building production-grade AI products and scalable web applications. React, Next.js, Node.js, Python, TensorFlow." />
        <meta name="theme-color" content="#050505" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rehan Sanjay — Full Stack & AI Engineer" />
        <meta property="og:description" content="Building AI-powered products and scalable web applications. Full Stack Engineer specializing in React, Next.js, Node.js, Python, and Deep Learning." />
        <meta property="og:url" content="https://rehansanjay.com" />
        <meta property="og:image" content="/icon.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rehan Sanjay — Full Stack & AI Engineer" />
        <meta name="twitter:description" content="Building AI-powered products and scalable web applications." />
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
              "jobTitle": "Full Stack & AI Engineer",
              "knowsAbout": ["React", "Next.js", "Node.js", "Python", "TensorFlow", "AI", "Machine Learning"],
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