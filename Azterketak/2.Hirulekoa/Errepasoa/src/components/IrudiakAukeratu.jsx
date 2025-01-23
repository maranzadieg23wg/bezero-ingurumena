import { useState } from "react";

function IrudiakAukeratu({ datuak3, gordeIrudia }) {
  const [selectedImage, setSelectedImage] = useState(null); // Initial state for selected image

  const handleRadioChange = (event) => {
    setSelectedImage(event.target.value); // Update state with selected value
    gordeIrudia(event.target.value); // Update state with selected value

  };

  return (
    <>
      <h1>{datuak3}</h1>
      <div>
        <input
          type="radio"
          id="irudia1"
          value="irudia1"
          checked={selectedImage === "irudia1"} // Set checked based on state
          onChange={handleRadioChange}
        />
        <label htmlFor="irudia1">Irudia 1</label>
      </div>
      <div>
        <input
          type="radio"
          id="irudia2"
          value="irudia2"
          checked={selectedImage === "irudia2"} // Set checked based on state
          onChange={handleRadioChange}
        />
        <label htmlFor="irudia2">Irudia 2</label>
      </div>
    </>
  );
}

export default IrudiakAukeratu;