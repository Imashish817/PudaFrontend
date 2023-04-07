import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../Pages/Layout";
import NotFound from "../../Pages/NotFound";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import React, { useEffect, useState } from "react";
import fetchViaToken from "../../APIHandler/User/fetchViaToken";
import { COOKIE } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";
import User from "../User/User";

export default function Loader() {
  const { updateUser } = React.useContext<MyContextValues>(MyContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let token = getCookie(COOKIE.KEY);
    if (!token) {
      setLoading(false);
      return;
    }
    fetchViaToken(token)
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
        {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
