import FahrenheitInput from "./commponent/Fahrenheit";
import CelsiusInput from "./commponent/Celsius";
import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("C");

  const handleCelsiusChange = (temp) => {
    setScale("C");
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale("F");
    setTemperature(temp);
  };

  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const celsius = scale === "F" ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === "C" ? toFahrenheit(temperature) : temperature;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">🌡️ Temperature Converter</h1>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
        <CelsiusInput value={celsius} onChange={handleCelsiusChange} />
        <FahrenheitInput value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
}

export default App;
