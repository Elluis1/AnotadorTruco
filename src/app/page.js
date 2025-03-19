"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import patterns from "./designs/patterns";

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
    if (conteoTruco1 === 16) {
      setConteoTruco1(1);
    }

    if (conteoTruco2 === 16) {
      setConteoTruco2(1);
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

  const handleRestar = (jugador) => {
    if (jugador === 1) setConteoChinChon1((prev) => prev - 10);
    if (jugador === 2) setConteoChinChon2((prev) => prev - 10);
    if (jugador === 3) setConteoChinChon3((prev) => prev - 10);
    if (jugador === 4) setConteoChinChon4((prev) => prev - 10);
  };

  const renderFosforos = (num) => (
    <div className="relative w-20 h-20 border border-gray-500 bg-white flex items-center justify-center">
      {(patterns[num] || []).map((fosforo, index) => (
        <Image
          key={index}
          src="/fosforo.png"
          alt="Fósforo"
          width={10}
          height={40}
          style={{
            position: "absolute",
            top: fosforo.top,
            left: fosforo.left,
            transform: `rotate(${fosforo.rotate})`,
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
            <div className="flex justify-center gap-4 bg-white p-4 rounded">
              <div className="flex flex-col items-center border-r-4 border-black pr-4">
                <h2 className="text-lg font-semibold text-black">Jugador 1</h2>
                {renderFosforos(conteoTruco1)}
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleSumarTruco(1)}
                >
                  +1
                </button>
              </div>
              <div className="flex flex-col items-center pl-4">
                <h2 className="text-lg font-semibold text-black">Jugador 2</h2>
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
              <a className="text-lg bg-amber-50 border-2">Jugador 1: {conteoChinChon1}</a>
                <button
                  onClick={() => handleRestar(1)}
                  className="ml-1 bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
              <a className="text-lg bg-amber-50 border-2">Jugador 2: {conteoChinChon2}</a>
                <button
                  onClick={() => handleRestar(2)}
                  className="ml-1 bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
                <a className="text-lg bg-amber-50 border-2">Jugador 3: {conteoChinChon3}</a>
                <button
                  onClick={() => handleRestar(3)}
                  className="ml-1 bg-red-500 text-white px-4 py-2 rounded"
                >
                  {" "}
                  -10
                </button>
              </div>
              <div>
              <a className="text-lg bg-amber-50 border-2">Jugador 4: {conteoChinChon4}</a>
                <button
                  onClick={() => handleRestar(4)}
                  className="ml-1 bg-red-500 text-white px-4 py-2 rounded"
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
                  className="border p-2 rounded bg-amber-50"
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
                      className=" border-black border-2 bg-blue-500 text-white px-4 py-2 rounded"
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
