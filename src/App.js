//Imports Component
import { Model } from "./components/Model";
import { Controller } from "./components/Controller";
import { StyleInformation } from "./components/StyleInformation";
//CSS
import "./styles.css";
import { useState } from "react";

//App

function App() {
  // component State
  const [backgroundColor, setBackgroundColor] = useState("#3d226d");
  const [width, setWidth] = useState(null);
  const [borderRadius, setBorderRadius] = useState("4%");
  const [height, setheight] = useState("50%");
  const [color, setColor] = useState("#ff0597");
  const [showStyle, setShowStyle] = useState(false);
  const styledModel = {
    backgroundColor,
    width,
    borderRadius,
    height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color,
    boxShadow: "inset 5px 5px 20px, -5px -5px 20px "
  };
  return (
    <body style={{ backgroundColor: backgroundColor, textAlign: "center" }}>
      <h1 style={{ color: "#fff" }}>Claymorphism.io</h1>
      <p style={{ color: "#fff", fontSize: "1.1rem" }}>
        Generate Soft-UI CSS code
      </p>
      <div className="App">
        <Model styledModel={styledModel} />
        <Controller
          value={backgroundColor}
          clorValue={color}
          setBackgroundColor={setBackgroundColor}
          setWidth={setWidth}
          setBorderRadius={setBorderRadius}
          setheight={setheight}
          setColor={setColor}
        />
      </div>
      {showStyle && (
        <StyleInformation
          styles={styledModel}
          closeModal={() => setShowStyle(false)}
        />
      )}
      <button onClick={() => setShowStyle(true)}>Copy Style</button>
    </body>
  );
}
export default App;
