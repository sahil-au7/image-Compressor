import React, { useState, useEffect } from "react";
import "./ImageCompressor.css";
import Resizer from "react-image-file-resizer";
import Button from "@material-ui/core/Button";
import CircularSlider from "@fseehawer/react-circular-slider";

const ImageCompressor = () => {
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  const [newImage, setNewImage] = useState("");
  const [quality, setQuality] = useState("");

  const handelFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const reSizeImage = () => {
    var fileInput = false;
    if (file) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "JPEG",
          quality,
          0,
          (uri) => {
            setNewImage(uri);
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="imageCompressor">
      <div className="imageCompressor__upload">
        <div className="imageCompressor__container">
          <img className="imageCompressor__image" src={image} alt="" />
        </div>
        <input accept="image/*" onChange={handelFile} type="file" />
      </div>
      <div className="imageCompressor__circularSlider">
        <CircularSlider
          label="reSize %"
          width={150}
          labelColor=""
          progressSize={20}
          trackSize={24}
          dataIndex={0}
          min={0}
          labelFontSize="1rem"
          valueFontSize="1.5rem"
          max={100}
          direction="1"
          onChange={(value) => setQuality(value)}
        />
        <Button onClick={reSizeImage} variant="contained" color="primary">
          Resize
        </Button>
      </div>
      <div className="compressed__image">
        <div className="imageCompressor__container">
          <img className="imageCompressor__image" src={newImage} alt="" />
        </div>
        <a href={newImage} download>
          <Button variant="contained" color="primary">
            Download
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ImageCompressor;
