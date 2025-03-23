import { ReactNode } from "react";
import "../app/styles/globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Resourcian",
  description: "Start your software engineering journey!",
  icons: {
    icon: "/icon.ico", // Correct reference to your favicon
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen container mx-auto px-4 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}