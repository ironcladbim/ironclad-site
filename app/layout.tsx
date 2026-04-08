import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIM Coordination Services | Ironclad BIM Solutions",
  description:
    "Ironclad BIM Solutions provides BIM coordination, clash detection, and VDC consulting for contractors, developers, and project teams.",
  openGraph: {
    title: "Ironclad BIM Solutions",
    description:
      "BIM coordination, clash detection, and VDC consulting for construction teams.",
    url: "https://ironcladbimsolutions.com",
    siteName: "Ironclad BIM Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ironclad BIM Solutions social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironclad BIM Solutions",
    description:
      "BIM coordination, clash detection, and VDC consulting for construction teams.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W47LZQ4MHY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W47LZQ4MHY');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}