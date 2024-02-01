// import { Inter } from "next/font/google";
import "./globals.css";

// COMPONENTS
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// GENERAL METADATA
export const metadata = {
  title: "Tabby | Pay Later",
  description:
    "Split your purchases into 4 interest-free payments at your favourite stores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
      // className={inter.className}
      >
        <Navbar />
        <NavbarMobile />
        {children}
        <Footer />
      </body>
    </html>
  );
}
