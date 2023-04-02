import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../Pages/Layout";
import Home from "../../Pages/Home";
import IsAuthorised from "../Navigation/IsAuthorised";
import UserInputForm from "../../Pages/UserInputForm";
import User from "../User/User";
import NotFound from "../../Pages/NotFound";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import React, { useEffect, useState } from "react";
import fetchViaToken from "../../APIHandler/User/fetchViaToken";

export default function Loader() {
  const { updateUser } = React.useContext<MyContextValues>(MyContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchViaToken()
      .then((response) => {
        response = response.user;
        updateUser(response.Name, response.MobileNo, response.AadharNo);
        setLoading(false);
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status >= 400 &&
          err.response.status < 500
        ) {
          navigate("/user/login");
          setLoading(false);
        }
        console.log(err, err.code);
      });
  }, []);
  if (loading) return <>Please wait...</>;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IsAuthorised element={<Home />} />} />
        <Route path="userForm" element={<UserInputForm />} />
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
