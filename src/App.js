import { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import ColorCreatorCard from "./components/ColorCreatorCard";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState([{ id: 1, value: "red" }]);

  function addColor(color) {
    const c = {
      id: nanoid(),
      value: color,
    };
    setColors([...colors, c]);
  }

  return (
    <div className="App">
      <div className="d-flex">
        <ColorCreatorCard addColor={addColor} />
        {colors.map((color) => {
          return <ColorCard color={color.value} />;
        })}
      </div>
    </div>
  );
}

export default App;
