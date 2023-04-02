import React, { useRef, useState } from "react";
import { MEDIA } from "../../Constants/Constant";
import uploadDocument from "../../APIHandler/uploadDocument.ts";
import { useNavigate } from "react-router-dom";

export default function UploadDocument() {
  const navigate = useNavigate();
  const [image, setImage] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>();
  const inputRef = useRef<HTMLInputElement>();
  const [uploadButton, setButtonText] = useState("Upload");
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let uri = reader.result.toString();
      let image = new Image();
      image.src = uri;
      image.onload = () => {
        if (image.width == 600 && image.height == 600) {
          setPreviewUrl(uri);
          setImage(selectedImage);
        } else {
          alert("Document width should be 600 X 600");
        }
      };
    };
    reader.readAsDataURL(selectedImage);
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (previewUrl) {
      setButtonText("Please wait...");
      uploadDocument(image)
        .then(() => {
          setButtonText("Upload");
          navigate("/userForm");
        })
        .catch((err) => {
          alert("Unable to upload.Try again");
          console.log(err);
        });
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
        {previewUrl ? uploadButton : "Choose File"}
      </button>
    </form>
  );
}
