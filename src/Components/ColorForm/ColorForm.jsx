import { useState } from "react";
import "./ColorForm.css";

export default function ColorForm({ onAddColor }) {
  const [hexColor, setHexColor] = useState("#000000");
  const [contrast, setContrast] = useState("#ffffff");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddColor(data);
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="role">Role</label>
          <input type="text" name="role" id="role" required />
          <label htmlFor="hex">Hex</label>
          <input
            type="text"
            name="hex"
            placeholder="Hexa"
            value={hexColor}
            onChange={(event) => setHexColor(event.target.value)}
          />
          <input
            type="color"
            id="hex"
            onChange={(event) => setHexColor(event.target.value)}
            value={hexColor}
          />
          <label htmlFor="contrast-text">Contrast Text</label>
          <input
            type="text"
            name="contrastText"
            placeholder="contrast-text"
            value={contrast}
            onChange={(event) => setContrast(event.target.value)}
          />
          <input
            type="color"
            id="contrast-text"
            onChange={(event) => setContrast(event.target.value)}
            value={contrast}
          />
        </fieldset>
        <button type="submit">ADD COLOR</button>
      </form>
    </>
  );
}
