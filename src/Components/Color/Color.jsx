import { useState } from "react";
import "./Color.css";
import Confirmation from "../Confirmation/Confirmation";
import ColorForm from "../ColorForm/ColorForm";
import CopyClipboard from "../CopyClipboard/CopyClipboard";
import ContrastCheck from "../ContrastCheck/ContrastCheck";

export default function Color({ color, onDeleteColor, onUpdateColor }) {
  const [isDeletingWanted, setIsDeletingWanted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleCancleDeletion() {
    setIsDeletingWanted(false);
  }

  function handleCancleEdit() {
    setIsEdit(false);
  }

  function handleUpdateColor(data) {
    onUpdateColor({ id: color.id, ...data });
    setIsEdit(false);
  }

  return (
    <>
      <div className="color-card" style={{ backgroundColor: color.hex }}>
        <p>
          <span className="color-card-headline">
            <strong>{color.hex}</strong>
          </span>
          <CopyClipboard color={color.hex} />
        </p>
        {isEdit ? (
          <>
            <ColorForm
              isEdit={isEdit}
              colorData={color}
              onSubmit={handleUpdateColor}
            />
            <button className="button" onClick={handleCancleEdit}>
              CANCEL
            </button>
          </>
        ) : (
          <>
            <p className="color-labeling" style={{ color: color.contrastText }}>
              <strong>{color.role}</strong>
            </p>
            <p
              className="color-labeling"
              style={{ color: color.contrastText }}
            >{`contrast: ${color.contrastText}`}</p>
            <ContrastCheck
              background={color.hex}
              foreground={color.contrastText}
            />
            <div>
              {isDeletingWanted ? (
                <Confirmation
                  id={color.id}
                  onCancleDeletion={handleCancleDeletion}
                  onDelete={onDeleteColor}
                />
              ) : (
                <>
                  <button
                    className="button color-card__button"
                    onClick={() => setIsDeletingWanted(true)}
                  >
                    DELETE
                  </button>
                  <button
                    className="button color-card__button"
                    onClick={() => setIsEdit(true)}
                  >
                    EDIT
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
