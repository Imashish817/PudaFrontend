import { Outlet } from "react-router-dom";

export default function PopupWrapper() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </div>
  );
}
