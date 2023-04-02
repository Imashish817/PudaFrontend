import UploadDocument from "../Components/Media/UploadDocument";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="container"
    >
      <UploadDocument />
    </div>
  );
}
