import React, { useEffect, useRef, useState } from "react";
import uploadDocument from "../APIHandler/uploadDocument.ts";
import { useLocation, useNavigate } from "react-router-dom";

export function UploadDocument() {
  const navigate = useNavigate();
  const location = useLocation();
  const [image, setImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const inputRef = useRef<HTMLInputElement>();
  const [uploadButton, setButtonText] = useState("Browse");
  const [fileName, setFileName] = useState("");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files[0];
    setFileName(selectedImage.name);
    const reader = new FileReader();
    reader.onload = () => {
      let uri = reader.result.toString();
      let image = new Image();
      image.src = uri;
      image.onload = () => {
        setPreviewUrl(uri);
        setImage(selectedImage);
        setButtonText("Upload");
      };
    };
    reader.readAsDataURL(selectedImage);
  };
  const handleSubmit = () => {
    if (previewUrl) {
      setButtonText("Please wait...");
      uploadDocument(image)
        .then(() => {
          setButtonText("Upload");
          navigate("/userForm");
        })
        .catch((err) => {
          setButtonText("Upload");
          alert(err.response.data.message);
          console.log(err);
        });
    } else {
      setButtonText("Browse");
      inputRef.current?.click();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "#3e7651",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ padding: "20px 40px" }}
          className="text-center text-white"
        >
          <p>
            Dear {String(location.state?.data.get("name"))} you have
            successfully created your account with aadhar no.{" "}
            {String(location.state?.data.get("aadhar"))}
          </p>
          <p>Upload your hand Written Application in less Than 2 MB size</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div style={{ margin: "0 20px" }}>
              <label htmlFor="path">Upload signed image</label>
              <input
                value={fileName}
                style={{
                  color: "white",
                  background: "transparent",
                  borderWidth: "0 0 1px 0",
                  borderRadius: "0",
                }}
                id="path"
                className="form-control"
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-outline-light">
              {uploadButton}
            </button>
            <input
              ref={inputRef}
              id="file"
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
