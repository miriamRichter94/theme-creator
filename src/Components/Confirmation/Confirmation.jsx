export default function Confirmation({ id, onCancleDeletion, onDelete }) {
  return (
    <>
      <p className="color-card-headline">Really delete</p>
      <button onClick={onCancleDeletion}>Cancel</button>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </>
  );
}
