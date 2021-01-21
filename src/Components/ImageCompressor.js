import React, { useRef, useState } from "react";
import "./ImageCompressor.css";
import CircularSlider from "@fseehawer/react-circular-slider";

const ImageCompressor = () => {
  const [image, setImage] = useState("");

  const handelFile = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
    // do something with your files...
  };
  return (
    <div className="imageCompressor">
      <div className="imageCompressor__upload">
        <div className="imageCompressor__container">
          {console.log(image, URL.createObjectURL(image))}
          {image?.length > 0 && (
            <img
              className="imageCompressor__image"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
        </div>
        <input accept="image/*" onChange={handelFile} type="file" />
      </div>
      <div className="imageCompressor__circularSlider">
        <CircularSlider
          label="reSize %"
          labelColor=""
          progressSize={20}
          trackSize={24}
          dataIndex={0}
          min={0}
          labelFontSize="1.5rem"
          valueFontSize="2.5rem"
          max={100}
          direction="1"
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="compressed__image">
        <div className="imageCompressor__container">
          {image?.length > 0 && (
            <img
              className="imageCompressor__image"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCompressor;
