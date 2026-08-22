import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import HeaderNavigation from "../components/organisms/HeaderNavigation";
import Footer from "../components/organisms/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Destinations Explorer - Heritage Pangasinan",
  description: "Explore the enduring landmarks and breathtaking coastal expanses of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-surface text-on-surface font-body-md text-body-md antialiased overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col`}
      >
        <HeaderNavigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
