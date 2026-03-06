import "./ColorForm.css";

export default function ColorForm() {
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="role">Role</label>
          <input type="text" id="role" />
          <label htmlFor="hex">Hex</label>
          <input type="text" placeholder="Hexa" />
          <input type="color" id="hex" />
          <label htmlFor="contrast-text">Contrast Text</label>
          <input type="text" placeholder="contrast-text" />
          <input type="color" id="contrast-text" />
        </fieldset>
      </form>
    </>
  );
}
