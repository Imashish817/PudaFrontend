import React, { useRef, useState } from "react";
import { MEDIA } from "../../Constants/Constant";
import axios from "axios";
import uploadDocument from "../../APIHandler/UploadDocument";
import { useNavigate } from "react-router-dom";

function convertFileToBlob(file: File | undefined): Blob | undefined {
  if (!file) return undefined;
  const blob: Blob = new Blob([file]);
  return blob;
}
export default function UploadDocument() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = event.target.files;
    if (!selectedImages) {
      return;
    }
    const selectedImage = selectedImages[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result ? reader.result.toString() : "");
    };
    reader.readAsDataURL(selectedImage);
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (previewUrl) {
      // uploadDocument(image)
      //   ?.then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      navigate("/userForm");
    } else {
      inputRef.current?.click();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img
        src={previewUrl ? previewUrl : MEDIA.UPLOAD_THUMBNAIL}
        alt="Preview"
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "block",
          border: "1px solid",
          borderRadius: "0.5rem",
          margin: "auto",
          maxWidth: "700px",
          objectFit: "cover",
        }}
      />
      <div className="mt-3 mb-3">
        <input
          style={{ display: "none", margin: "auto" }}
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={(event) => handleImageChange(event)}
        />
      </div>
      <button
        style={{ display: "block", margin: "auto" }}
        className="btn btn-primary btn-lg btn-block"
        type="submit"
      >
        {previewUrl ? "Upload" : "Choose File"}
      </button>
    </form>
  );
}
