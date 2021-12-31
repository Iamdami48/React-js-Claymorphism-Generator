export function StyleInformation({ closeModal, styles }) {
  return (
    <div onDoubleClick={closeModal} className="stylesInformationContainer">
      <h1>ClayMorphism Css Style</h1>
      <p style={{ color: "orange" }}>Double Tap to close modal</p>
      <br />
      <br />
      <div>
        <p>Model background Color: {styles.backgroundColor}</p>
        <br />
        <p>Model width: {styles.width}</p>
        <br />
        <p>Model Height: {styles.height}</p>
        <br />
        <p>Model Border Radius: {styles.borderRadius}</p>
        <br />
        <p>Model Display: {styles.display}</p>
        <br />
        <p>Model justify-Content: {styles.justifyContent}</p>
        <br />
        <p>Model align-Items: {styles.alignItems}</p>
        <br />
        <p>Model flex-Direction: {styles.flexDirection}</p>
        <br />
        <p>Model text-Align: {styles.textAlign}</p>
        <br />
        <p>Model color: {styles.color}</p>
        <br />
        <p>Model box-Shadow: {styles.boxShadow}</p>
      </div>
    </div>
  );
}
