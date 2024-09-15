import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BLU NOVA - Building Tomorrow Today!",
  description: "Discover innovative solutions and futuristic technology at BLU NOVA. We're shaping the future with advanced projects and expertise.",
  keywords: "BLU NOVA, innovation, websites, mobile apps, applications, solutions, tech, technology, future projects, cutting-edge solutions",
  authors: [{ name: "BLU NOVA Team", url: "https://blunovatech.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description||""} />
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <meta name="keywords" content={metadata.keywords as any} />
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <meta name="author" content={metadata.authors as any} />
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <meta name="robots" content={metadata.robots as any} />
        <meta property="og:title" content="BLU NOVA - Building Tomorrow Today!" />
        <meta property="og:description" content="Discover innovative solutions and futuristic technology at BLU NOVA." />
        <meta property="og:image" content="https://i.ibb.co/YDP1QRb/BLU-BG-LESS.png" />
        <meta property="og:url" content="https://blunovatech.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BLU NOVA - Building Tomorrow Today!" />
        <meta name="twitter:description" content="Discover innovative solutions at BLU NOVA." />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <link rel="canonical" href="https://blunovatech.com.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BLU NOVA",
              "url": "https://blunovatech.com",
              "logo": "https://i.ibb.co/YDP1QRb/BLU-BG-LESS.png", 
              "description": "Discover innovative solutions and futuristic technology at BLU NOVA.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+ 2547 465-465-13",
                "contactType": "Customer Support",
              },
              "sameAs": [
                "https://www.facebook.com/blunovatch",
                "https://www.twitter.com/blunovatech",
              ],
            }),
          }}
        />
        <title>{metadata.title || "Blunova" as any}</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navbar />
        </div>
        {children}
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
