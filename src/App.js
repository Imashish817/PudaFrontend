import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import User from "./Components/User/User.tsx";
import "./App.css";
import NotFound from "./Pages/NotFound.tsx";
import UserInputForm from "./Pages/UserInputForm.tsx";
import { MyProvider } from "./Storage/Storage.tsx";
import IsAuthorised from "./Components/Navigation/IsAuthorised.tsx";
import Home from "./Pages/Home.tsx";
import Loader from "./Components/Controller/Loader.tsx";

export default function App() {
  return (
    <MyProvider>
      <Loader />
    </MyProvider>
  );
}
