# FahrenheitInput Component

This component provides a reusable input field specifically designed for entering Fahrenheit temperature values. It's styled with Tailwind CSS for a modern, dark-themed appearance.

---

# Component Code

Here's the full code for the `FahrenheitInput.jsx` component:

```javascript
function FahrenheitInput({ value, onChange }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Fahrenheit</label>
      <input
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FahrenheitInput;
Props
The FahrenheitInput component accepts the following props:

value (number or string): The current value displayed in the input field. This should typically be a state variable from the parent component.
onChange (function): A callback function that triggers when the input value changes. It receives the new input value as its argument (e.target.value).
Usage
To use this component, import it into your parent React component and pass the necessary value and onChange props.

JavaScript

import React, { useState } from 'react';
import FahrenheitInput from './FahrenheitInput'; // Adjust path as needed

function TemperatureConverter() {
  const [fahrenheitTemp, setFahrenheitTemp] = useState('');

  const handleFahrenheitChange = (newValue) => {
    setFahrenheitTemp(newValue);
    // You would typically add conversion logic here
    // e.g., convert to Celsius if a Celsius input is also present
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Enter Temperature</h2>
      <FahrenheitInput value={fahrenheitTemp} onChange={handleFahrenheitChange} />
      {/* You could display converted values or other UI here */}
      <p className="mt-4">Current Fahrenheit: {fahrenheitTemp}</p>
    </div>
  );
}

export default TemperatureConverter;


```



#CelsiusInput Component
This component provides a reusable input field specifically designed for entering Celsius temperature values. It's styled with Tailwind CSS for a modern, dark-themed appearance.

Component Code
Here's the full code for the CelsiusInput.jsx component:

JavaScript

function CelsiusInput({ value, onChange }) {
  return (
    <div>
      <label className="block mb-1 font-medium">Celsius</label>
      <input
        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default CelsiusInput;
Props
The CelsiusInput component accepts the following props:

value (number or string): The current value displayed in the input field. This should typically be a state variable from the parent component.
onChange (function): A callback function that triggers when the input value changes. It receives the new input value as its argument (e.target.value).
Usage
To use this component, import it into your parent React component and pass the necessary value and onChange props.

```javascript

import React, { useState } from 'react';
import CelsiusInput from './CelsiusInput'; // Adjust path as needed

function TemperatureConverter() {
  const [celsiusTemp, setCelsiusTemp] = useState('');

  const handleCelsiusChange = (newValue) => {
    setCelsiusTemp(newValue);
    // You'd typically add conversion logic here if this is part of a larger app
    // e.g., convert to Fahrenheit if a Fahrenheit input is also present
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Enter Temperature</h2>
      <CelsiusInput value={celsiusTemp} onChange={handleCelsiusChange} />
      {/* You could display converted values or other UI here */}
      <p className="mt-4">Current Celsius: {celsiusTemp}</p>
    </div>
  );
}

export default TemperatureConverter;
