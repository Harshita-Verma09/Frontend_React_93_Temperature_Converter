// CelsiusInput.jsx
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