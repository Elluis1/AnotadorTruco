"use client";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        style={{
          backgroundImage: "url('/fondoVerde.jpg')",
          backgroundSize: "cover",
        }}
      >
        <main className="relative flex-grow flex justify-center items-center px-4">
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
