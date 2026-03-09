import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    const id = uid();

    setColors([{ id: id, ...newColor }, ...colors]);
    console.log(colors);
  }

  function handleDeletColor(id) {
    setColors(colors.filter((color) => color.id != id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} onDeleteColor={handleDeletColor} />
      ))}
    </>
  );
}

export default App;
