import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'monospace'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* LCP measurement script - run first to capture real LCP */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              new PerformanceObserver((list)=>{
                for(const e of list.getEntries()){
                  window.__lcp=e;
                  if(typeof console!=='undefined'){
                    console.log('[LCP]',e.element?.tagName,e.startTime+'ms',e.url||e.element?.innerText?.slice(0,50));
                  }
                }
              }).observe({type:'largest-contentful-paint',buffered:true});
            `,
          }}
        />

        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/homehero.png"
          fetchPriority="high"
        />

        {/* Preconnect to external origins */}
        <link
          rel="preconnect"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://api.compl-ai.co.uk"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://storage.googleapis.com"
          crossOrigin="anonymous"
        />
        {/* Google Analytics preconnect */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* DNS prefetch as fallback */}
        <link
          rel="dns-prefetch"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
        />
        <link rel="dns-prefetch" href="https://api.compl-ai.co.uk" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <GoogleAnalytics gaId="G-6HYG0FJT6F" />
      </body>
    </html>
  );
}
