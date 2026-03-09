export default function Confirmation({ id, onCancleDeletion, onDeleteColor }) {
  return (
    <>
      <p className="color-card-headline">Really delete</p>
      <button onClick={onCancleDeletion}>Cancel</button>
      <button onClick={() => onDeleteColor(id)}>DELETE</button>
    </>
  );
}
