"use client";

import { useState } from "react";

export default function Home() {
  const [juego, setJuego] = useState(0);

  const juegos = [
    { id: 1, nombre: "Truco" },
    { id: 2, nombre: "Envido" },
  ];

  // Conteo para el truco
  const [conteoTruco1, setConteoTruco1] = useState(0);
  const [conteoTruco2, setConteoTruco2] = useState(0);

  // Conteo para el envido
  const [conteoEnvido1, setConteoEnvido1] = useState(0);
  const [conteoEnvido2, setConteoEnvido2] = useState(0);
  const [conteoEnvido3, setConteoEnvido3] = useState(0);
  const [conteoEnvido4, setConteoEnvido4] = useState(0);

  const handleReset = () => {
    setConteoTruco1(0);
    setConteoTruco2(0);
    setConteoEnvido1(0);
    setConteoEnvido2(0);
    setConteoEnvido3(0);
    setConteoEnvido4(0);
  };

  const handleSumarTruco = (jugador) => {
    if (jugador === 1) setConteoTruco1((prev) => prev + 1);
    if (jugador === 2) setConteoTruco2((prev) => prev + 1);
  };

  const handleSumarEnvido = (jugador) => {
    if (jugador === 1) setConteoEnvido1((prev) => prev + 1);
    if (jugador === 2) setConteoEnvido2((prev) => prev + 1);
    if (jugador === 3) setConteoEnvido3((prev) => prev + 1);
    if (jugador === 4) setConteoEnvido4((prev) => prev + 1);
  }

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4">
        <title>Anotador de Truco/Envido</title>
        <select
          className="border p-2 rounded"
          value={juego}
          onChange={(e) => setJuego(Number(e.target.value))}
          name="Juegos"
          id="juegos-select"
        >
          <option value="0">Seleccionar el juego</option>
          {juegos.map((juego) => (
            <option key={juego.id} value={juego.id}>
              {juego.nombre}
            </option>
          ))}
        </select>
      </header>

      {/* Contenido dinámico */}
      <div className="mt-20 p-4">
        {juego === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Anotador de Truco
            </h1>
            <div className="flex justify-center gap-4">
              <div>
                <p>Jugador 1: {conteoTruco1}</p>
                <button
                  onClick={() => handleSumarTruco(1)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  +1
                </button>
              </div>
              <div>
                <p>Jugador 2: {conteoTruco2}</p>
                <button
                  onClick={() => handleSumarTruco(2)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  +1
                </button>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        )}

        {juego === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Anotador de Envido
            </h1>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>Jugador 1: {conteoEnvido1}</div>
              <button
                onClick={() => handleSumarEnvido(1)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                +1
              </button>
              <div>Jugador 2: {conteoEnvido2}</div>
              <button
                onClick={() => handleSumarEnvido(2)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                +1
              </button>
              <div>Jugador 3: {conteoEnvido3}</div>
              <button
                onClick={() => handleSumarEnvido(3)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                +1
              </button>
              <div>Jugador 4: {conteoEnvido4}</div>
              <button
                onClick={() => handleSumarEnvido(4)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                +1
              </button>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
