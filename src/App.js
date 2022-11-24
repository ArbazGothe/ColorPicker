import { useState } from 'react';
import './App.css';
import ColorCard from './components/ColorCard';
import ColorCreatorCard from './components/ColorCreatorCard';
import { nanoid } from 'nanoid';

function App() {
  const [colors, setColors] = useState([{ id: 1, value: 'red' }]);

  function addColor(color) {
    const c = {
      id: nanoid(),
      value: color,
    };
    setColors([...colors, c]);
  }
  function removeColor(id) {
    const remainingColors = colors.filter((color) => {
      return color.id !== id;
    });
    setColors([...remainingColors]);
  }
  function updateColor({ id, value }) {
    const index = colors.findIndex((color) => color.id === id);

    if (index > -1) {
      const colorCopy = [...colors];
      colorCopy[index].value = value;

      setColors(colorCopy);
    }
  }

  return (
    <div className='App'>
      <div className='d-flex'>
        <ColorCreatorCard addColor={addColor} />
        {colors.map((color, index) => {
          return <ColorCard key={index} color={color} removeColor={removeColor} updateColor={updateColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
