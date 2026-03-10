import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
import { initialThemes } from "./lib/colorThemes";
import { useState } from "react";

function App() {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
  const [colors, setColors] = useState(getColors(selectedTheme));

  function getColors(themeId) {
    const theme = themes.find((theme) => theme.id == themeId);
    const colors = theme.colors;
    return colors;
  }

  function handleAddColor(newColor) {
    const id = uid();

    const updatedThemes = themes.map((theme) => {
      if (theme.id == selectedTheme) {
        theme.colors = [{ id: id, ...newColor }, ...theme.colors];
      }

      return theme;
    });

    setThemes(updatedThemes);
    setColors(getColors(selectedTheme));
  }

  function handleDeletColor(id) {
    setThemes(
      themes.map((theme) => {
        if (theme.id == selectedTheme) {
          theme.colors = theme.colors.filter((color) => color.id != id);
        }
        return theme;
      }),
    );
    setColors(getColors(selectedTheme));
  }

  function handleUpdateColor(editColorData) {
    const updatedThemes = themes.map((theme) => {
      if (theme.id == selectedTheme) {
        theme.colors = theme.colors.map((color) => {
          if (color.id !== editColorData.id) return color; // keep original
          return { ...color, ...editColorData }; // replace with updated copy
        });
      }

      return theme;
    });

    setThemes(updatedThemes);
    setColors(getColors(selectedTheme));
  }

  function handleSelectingTheme(id) {
    setSelectedTheme(id);
    setColors(getColors(id));
  }

  function handleDeleteTheme(id) {
    const leftThemes = themes.filter((theme) => theme.id != id);
    setThemes(leftThemes);
    setSelectedTheme(leftThemes[0].id);
    setColors(getColors(leftThemes[0].id));
  }

  function handleAddTheme(themeName) {
    const id = uid();

    setThemes([...themes, { id: id, name: themeName, colors: [] }]);
  }

  function handleEditTheme(themeName) {
    const updatedThemes = themes.map((theme) => {
      if (theme.id != selectedTheme) return theme;
      return { ...theme, name: themeName };
    });

    setThemes(updatedThemes);
  }

  return (
    <>
      <h1 className="heading">Theme Creator</h1>
      <ThemeSelector
        themes={themes}
        onThemeChange={handleSelectingTheme}
        selectedTheme={selectedTheme}
        onDeleteTheme={handleDeleteTheme}
        onAddTheme={handleAddTheme}
        onEditTheme={handleEditTheme}
      />
      <ColorForm onSubmit={handleAddColor} />
      <div className="color-cards-board">
        {colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={handleDeletColor}
            onUpdateColor={handleUpdateColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
