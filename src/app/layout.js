"use client";

import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/fondoVerde.jpg')",
          backgroundSize: "cover",
        }}
      >
        <main className="relative flex-grow flex justify-center items-center px-4">
          <div
            className="max-w-4xl min-h-screen bg-cover bg-center bg-no-repeat shadow-lg rounded-lg p-6"
            style={{
              backgroundImage: "url('/fondoMadera.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
