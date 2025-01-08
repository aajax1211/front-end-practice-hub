import React from "react";
import "./temp.css"


export default function TempConverter() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");
  
    const handleCelsius = (e) => {
      let celsiusValue = e.target.value;
      setCelsius(celsiusValue);
      if (celsiusValue !== "" && !isNaN(celsiusValue)) {
        let fahrenheitValue = ((celsiusValue * 9) / 5 + 32).toFixed(4);
        setFahrenheit(fahrenheitValue);
      } else {
        setFahrenheit("");
      }
    };
  
    const handleFahrenheit = (e) => {
      let fahrenheitValue = e.target.value;
      setFahrenheit(fahrenheitValue);
      if (fahrenheitValue != "" && !isNaN(fahrenheitValue)) {
        let celsiusValue = (((fahrenheitValue - 32) * 5) / 9).toFixed(4);
        setCelsius(celsiusValue);
      } else {
        setCelsius("");
      }
    };
    return (
      <div className="container">
        <div className="temp">
          <input type="text" value={celsius} onChange={handleCelsius} />
          <span>Celsius</span>
        </div>
        <span className="sign">=</span>
        <div className="temp">
          <input type="text" value={fahrenheit} onChange={handleFahrenheit} />
          <span>Fahrenheit</span>
        </div>
      </div>
    );
}
