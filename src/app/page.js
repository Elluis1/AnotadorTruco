"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [juego, setJuego] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [jugador, setJugador] = useState(0);

  const juegos = [
    { id: 1, nombre: "Truco" },
    { id: 2, nombre: "Chin Chon" },
  ];

  // Conteo para el truco
  const [conteoTruco1, setConteoTruco1] = useState(0);
  const [conteoTruco2, setConteoTruco2] = useState(0);

  useEffect(() => {
    if (conteoTruco1 === 15) {
      setConteoTruco1(0);
    }

    if (conteoTruco2 === 15) {
      setConteoTruco2(0);
    }
  }, [conteoTruco1, conteoTruco2]);

  // Conteo para el ChinChon
  const [conteoChinChon1, setConteoChinChon1] = useState(0);
  const [conteoChinChon2, setConteoChinChon2] = useState(0);
  const [conteoChinChon3, setConteoChinChon3] = useState(0);
  const [conteoChinChon4, setConteoChinChon4] = useState(0);

  const handleReset = () => {
    setConteoTruco1(0);
    setConteoTruco2(0);

    setConteoChinChon1(0);
    setConteoChinChon2(0);
    setConteoChinChon3(0);
    setConteoChinChon4(0);
  };

  const handleSumarTruco = (jugador) => {
    if (jugador === 1) setConteoTruco1((prev) => prev + 1);
    if (jugador === 2) setConteoTruco2((prev) => prev + 1);
  };

  const handleSumarChinChon = (jugador, value) => {
    if (jugador === 1) setConteoChinChon1((prev) => prev + parseInt(value));
    if (jugador === 2) setConteoChinChon2((prev) => prev + parseInt(value));
    if (jugador === 3) setConteoChinChon3((prev) => prev + parseInt(value));
    if (jugador === 4) setConteoChinChon4((prev) => prev + parseInt(value));
  };

  const handleRestar = (jugador) => {
    if (jugador === 1) setConteoChinChon1((prev) => prev - 10);
    if (jugador === 2) setConteoChinChon2((prev) => prev - 10);
    if (jugador === 3) setConteoChinChon3((prev) => prev - 10);
    if (jugador === 4) setConteoChinChon4((prev) => prev - 10);
  };

  const renderFosforos = (cantidad) => {
    return (
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: cantidad }).map((_, i) => (
          <Image
            key={i}
            src="/fosforo.png"
            alt="Fósforo"
            width={20}
            height={50}
          />
        ))}
      </div>
    );
  };

  const handleSubmit = (e, jugador) => {
    e.preventDefault();
    handleSumarChinChon(jugador, inputValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <header className="w-full bg-white shadow-md z-50 p-4 text-center">
        <h1 className="text-xl font-bold">Anotador de Truco/ChinChon</h1>
        <select
          className="mt-2 p-2 rounded"
          value={juego}
          onChange={(e) => setJuego(Number(e.target.value))}
        >
          <option value="0">Seleccionar el juego</option>
          {juegos.map((j) => (
            <option key={j.id} value={j.id}>
              {j.nombre}
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
                <h2 className="text-lg font-semibold">Jugador 1</h2>
                {renderFosforos(conteoTruco1)}
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleSumarTruco(1)}
                >
                  +1
                </button>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Jugador 2</h2>
                {renderFosforos(conteoTruco2)}
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleSumarTruco(2)}
                >
                  +1
                </button>
              </div>
            </div>
          </div>
        )}

        {juego === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Anotador de ChinChon
            </h1>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                Jugador 1: {conteoChinChon1}
                <button
                  onClick={() => handleRestar(1)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
                Jugador 2: {conteoChinChon2}
                <button
                  onClick={() => handleRestar(2)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
                Jugador 3: {conteoChinChon3}
                <button
                  onClick={() => handleRestar(3)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
                Jugador 4: {conteoChinChon4}
                <button
                  onClick={() => handleRestar(4)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <form
                className="flex flex-col items-center gap-2 mt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  eval(
                    `setConteoChinChon${jugador}(${eval(
                      `conteoChinChon${jugador}`
                    )} + Number(inputValue))`
                  );
                  setInputValue("");
                }}
              >
                <input
                  type="number"
                  className="border p-2 rounded"
                  placeholder="¿Cuánto suma?"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setJugador(num)}
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </div>
        )}
        <button
          onClick={handleReset}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
