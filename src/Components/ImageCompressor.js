import React, { useState, useEffect } from "react";
import "./ImageCompressor.css";
import imageCompression from "browser-image-compression";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CircularSlider from "@fseehawer/react-circular-slider";

const ImageCompressor = () => {
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newFile, setNewFile] = useState("");
  const [file, setFile] = useState("");
  const [quality, setQuality] = useState("");

  const handelFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const reSizeImage = async () => {
    const options = {
      maxSizeMB: quality / 1024,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      setNewImage(URL.createObjectURL(compressedFile));
      setNewFile(compressedFile);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="imageCompressor">
      <div className="imageCompressor__upload">
        {image ? (
          <div className="imageCompressor__container">
            <img className="imageCompressor__image" src={image} alt="" />
          </div>
        ) : (
          <div></div>
        )}

        {file ? (
          <p className="imageCompressor__sizeInfo">
            {" "}
            Original Size : {(file.size / 1024 / 1024).toFixed(3)} MB
          </p>
        ) : (
          <p></p>
        )}
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          <input
            hidden
            className="imageCompressor__chooseFile"
            accept="image/*"
            onChange={handelFile}
            type="file"
            id="upload"
          />
          <label for="upload">
            <strong>Upload</strong>
          </label>
        </Button>
      </div>
      {image ? (
        <div className="imageCompressor__circularSlider">
          <CircularSlider
            label="reSize %"
            width={150}
            trackColor="#e4f9f5"
            progressColorFrom="darkgray"
            knobColor=""
            labelColor="#e4f9f5"
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
          <Button onClick={reSizeImage} variant="contained" color="default">
            <strong>Resize</strong>
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      {newImage ? (
        <div className="compressed__image">
          <div className="imageCompressor__container">
            <img className="imageCompressor__image" src={newImage} alt="" />
          </div>
          {newFile ? (
            <p className="compressed_imageSize">
              New Size : {(newFile.size / 1024 / 1024).toFixed(3)} MB
            </p>
          ) : (
            <p></p>
          )}
          <a href={newImage} download>
            <Button variant="contained" color="default">
              <strong>Download</strong>
            </Button>
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ImageCompressor;
