import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>A3 Cargo Express</title>
      </head>
      <body>
        <Navbar />
        <main className="flex-grow pt-[64px] ">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
