import { useState } from "react";
import "./Color.css";
import Confirmation from "../Confirmation/Confirmation";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [isDeletingWanted, setIsDeletingWanted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleCancleDeletion() {
    setIsDeletingWanted(false);
  }

  function handleCancleEdit() {
    setIsEdit(false);
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
        {isEdit ? (
          <>
            <ColorForm
              isEdit={isEdit}
              colorData={color}
              onUpdateColor={onUpdateColor}
              closeForm={handleCancleEdit}
            />
            <button onClick={handleCancleEdit}>CANCLE</button>
          </>
        ) : isDeletingWanted ? (
          <Confirmation
            id={color.id}
            onCancleDeletion={handleCancleDeletion}
            onDeleteColor={onDeleteColor}
          />
        ) : (
          <>
            <button onClick={() => setIsDeletingWanted(true)}>DELETE</button>
            <button onClick={() => setIsEdit(true)}>EDIT</button>
          </>
        )}
      </div>
    </>
  );
}
