export default function EditTheme({ onCancleAction, onEditTheme, themeName }) {
  function handleSubmit(event) {
    event.preventDefault();
    onEditTheme(event.target.themeName.value);
    onCancleAction();
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Theme Name</label>
        <input id="theme-name" name="themeName" defaultValue={themeName} />
        <button type="submit">SAVE THEME</button>
      </form>
      <button onClick={onCancleAction}>CANCEL</button>
    </>
  );
}
