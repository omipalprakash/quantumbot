import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"], weight: ['400', '500', '600', '700'],
});



export const metadata = {
  title: "Quantumbot",
  description: "Quantumbot Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
