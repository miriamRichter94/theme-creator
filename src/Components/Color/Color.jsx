import "./Color.css";

export default function Color({ color }) {
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
      </div>
    </>
  );
}
