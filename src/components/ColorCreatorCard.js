import { useState } from "react";

const inputStyle = {
  height: "20px",
  border: "none",
  borderBottom: "1px solid #ccc",
};

export default function ColorCreatorCard({ addColor }) {
  const [color, setColor] = useState("#fafafa");

  function keyDownHandler(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      addColor(color);
      setColor("#fafafa");
    }
  }

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div style={{ backgroundColor: color }} className="card p-3">
      <input
        value={color}
        onChange={handleChange}
        onKeyDown={keyDownHandler}
        type="text"
        className="p-0"
        style={inputStyle}
      />
    </div>
  );
}
