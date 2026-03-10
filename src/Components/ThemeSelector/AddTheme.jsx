export default function AddTheme({ onCancleAction, onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddTheme(event.target.themeName.value);
    onCancleAction();
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Theme Name</label>
        <input id="theme-name" name="themeName" />
        <button type="submit">SAVE THEME</button>
      </form>
      <button onClick={onCancleAction}>CANCEL</button>
    </>
  );
}
