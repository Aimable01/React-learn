import { useState } from "react";
import Im1 from "./assets/image1.png";
import Im2 from "./assets/image2.png";
import Im3 from "./assets/image3.png";
import Im4 from "./assets/image4.png";
function Slider() {
  const [index, setIndex] = useState(0);

  let images = [Im1, Im2, Im3, Im4];
  let src = images[index];

  function handleNext() {
    if (index !== images.length - 1) setIndex(index + 1);
    else setIndex(0);
  }

  function handlePrev() {
    if (index !== 0) setIndex(index - 1);
    else setIndex(images.length - 1);
  }
  return (
    <div>
      <hr />
      <h4>Image slider</h4>
      <img className="images" src={src} alt="" />
      <p>Current image is: image{index + 1}</p>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Prev</button>
    </div>
  );
}
export default Slider;
