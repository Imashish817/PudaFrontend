import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import User from "./Components/User/User.tsx";
import "./App.css";
import NotFound from "./Pages/NotFound.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
