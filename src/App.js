import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import User from "./Components/User/User.tsx";
import "./App.css";
import NotFound from "./Pages/NotFound.tsx";
import UserInputForm from "./Pages/UserInputForm.tsx";
import IsAuthorised from "./Components/Navigation/IsAuthorised.tsx";
import Home from "./Pages/Home.tsx";
import IsAuthenticated from "./Components/User/IsAuthenticated.ts";
import { MyProvider } from "./Storage/Storage.tsx";

export default function App() {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <IsAuthorised validator={IsAuthenticated} element={<Home />} />
            }
          />
          <Route path="userForm" element={<UserInputForm />} />
          <Route path="user/*" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MyProvider>
  );
}
