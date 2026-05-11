import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Serene Shop | Modern Minimalist Electronics & Care",
  description: "Curating moments of calm through intentional technology and care. Shop premium electronics, skincare, and lifestyle products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
