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
  }

  function handleDeletColor(id) {
    setColors(colors.filter((color) => color.id != id));
  }

  function handleUpdateColor(editColorData) {
    setColors(
      colors.map((color) => {
        if (color.id == editColorData.id) {
          color.role = editColorData.role;
          color.hex = editColorData.hex;
          color.contrastText = editColorData.contrastText;
        }
        return color;
      }),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmit={handleAddColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDeleteColor={handleDeletColor}
          onUpdateColor={handleUpdateColor}
        />
      ))}
    </>
  );
}

export default App;
