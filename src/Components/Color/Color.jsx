import { useState } from "react";
import "./Color.css";
import Confirmation from "../Confirmation/Confirmation";

export default function Color({ color, onDeleteColor }) {
  const [isDeletingWanted, setIsDeletingWanted] = useState(false);

  function handleCancleDeletion() {
    setIsDeletingWanted(false);
  }

  return (
    <>
      <div className="color-card" style={{ backgroundColor: color.hex }}>
        <p className="color-card-headline">
          <strong>{color.hex}</strong>
        </p>
        <p style={{ color: color.contrastText }}>
          <strong>{color.role}</strong>
        </p>
        <p
          style={{ color: color.contrastText }}
        >{`contrast: ${color.contrastText}`}</p>
        {isDeletingWanted ? (
          <Confirmation
            id={color.id}
            onCancleDeletion={handleCancleDeletion}
            onDeleteColor={onDeleteColor}
          />
        ) : (
          <button onClick={() => setIsDeletingWanted(true)}>DELETE</button>
        )}
      </div>
    </>
  );
}
