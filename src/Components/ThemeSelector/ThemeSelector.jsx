import { useState } from "react";
import Confirmation from "../Confirmation/Confirmation";
import AddTheme from "./AddTheme";
import EditTheme from "./EditTheme";

export default function ThemeSelector({
  themes,
  onThemeChange,
  selectedTheme,
  onDeleteTheme,
  onAddTheme,
  onEditTheme,
}) {
  const [action, setAction] = useState("");

  function handleAddingThme() {
    setAction("add");
  }

  function handleEditingTheme() {
    setAction("edit");
  }

  function handleWantingToDelete() {
    setAction("delete");
  }

  function handleCancelAction() {
    setAction("");
  }

  function handleDeleteingTheme(id) {
    onDeleteTheme(id);
    setAction("");
  }

  function getThemeName() {
    const theme = themes.find((theme) => theme.id == selectedTheme);

    return theme.name;
  }

  return (
    <>
      <select
        name="theme"
        onChange={(event) => onThemeChange(event.target.value)}
        value={selectedTheme}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      {action ? (
        action == "add" ? (
          <AddTheme
            onCancleAction={handleCancelAction}
            onAddTheme={onAddTheme}
          />
        ) : action == "edit" ? (
          <EditTheme
            onCancleAction={handleCancelAction}
            onEditTheme={onEditTheme}
            themeName={getThemeName()}
          />
        ) : action == "delete" ? (
          <Confirmation
            id={selectedTheme}
            onCancleDeletion={handleCancelAction}
            onDelete={handleDeleteingTheme}
          />
        ) : (
          ""
        )
      ) : (
        <>
          <button onClick={handleAddingThme}>ADD</button>
          <button
            onClick={handleEditingTheme}
            disabled={selectedTheme == themes[0].id ? true : false}
          >
            EDIT
          </button>
          <button
            onClick={handleWantingToDelete}
            disabled={selectedTheme == themes[0].id ? true : false}
          >
            DELETE
          </button>
        </>
      )}
    </>
  );
}
