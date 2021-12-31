import { StyleInformation } from "./StyleInformation";

//CSS
import "../styles.css";

export function Controller({
  setBorderRadius,
  setWidth,
  value,
  clorValue,
  setBackgroundColor,
  setheight,
  setColor
}) {
  const styledModel = {
    borderRadius: "8px",
    display: "grid",
    gap: "20px",
    padding: "10px 5px"
  };
  return (
    <div className="controller" style={styledModel}>
      <label>
        <span>Model Background Color:</span>
        <input
          type="color"
          value={value}
          onInput={(e) => setBackgroundColor(e.target.value)}
        />
      </label>
      <label>
        <span>Model Width:</span>
        <input
          type="range"
          min="0"
          max="90"
          defaultValue="25"
          onInput={(e) => setWidth(`${e.target.value}%`)}
        />
      </label>
      <label>
        <span>Model Height:</span>
        <input
          type="range"
          min="0"
          max="90"
          defaultValue="25"
          onInput={(e) => setheight(`${e.target.value}%`)}
        />
      </label>
      <label>
        <span>Model Border Radius:</span>
        <input
          type="range"
          min="0"
          max="50"
          defaultValue="4"
          onInput={(e) => setBorderRadius(`${e.target.value}%`)}
        />
      </label>
      <label>
        <span>Model Text Color:</span>
        <input
          type="color"
          value={clorValue}
          onInput={(e) => setColor(e.target.value)}
        />
      </label>
    </div>
  );
}
