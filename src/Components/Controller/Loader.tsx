import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../Pages/Layout";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import React, { Suspense, useEffect, useState } from "react";
import fetchViaToken from "../../APIHandler/User/fetchViaToken";
import { COOKIE, USER } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";
import IsAuthorised from "../Navigation/IsAuthorised.tsx";
import Home from "../../Pages/Home.tsx";
import Splash from "../../Pages/Splash.tsx";
const ResourceError = React.lazy(() =>
  import("../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);
const User = React.lazy(() =>
  import("../User/UserModule").then(({ User }) => ({
    default: User,
  }))
);
const Admin = React.lazy(() =>
  import("../../Pages/Admin").then(({ Admin }) => ({
    default: Admin,
  }))
);
const DashboardModule = React.lazy(() =>
  import("../Dashboard/DashboardModule.tsx").then(({ DashboardModule }) => ({
    default: DashboardModule,
  }))
);
export default function Loader() {
  const { updateUser } = React.useContext<MyContextValues>(MyContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let errorCode = 0;
  useEffect(() => {
    let token = getCookie(COOKIE.KEY);
    if (!token) {
      setLoading(false);
      return;
    }
    fetchViaToken(token)
      .then((response) => {
        response = response.user;
        updateUser(
          response.Name,
          response.MobileNo,
          response.AadharNo,
          response.Files
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (
          err.response &&
          err.response.status >= 400 &&
          err.response.status < 500
        ) {
          navigate(USER.LOGIN);
        } else if (err.response && err.response.status >= 500) {
          errorCode = err.response.status;
        }
      });
  }, []);
  if (loading) return <Splash />;
  if (errorCode !== 0) return <ResourceError errorCode={errorCode} />;
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="user/*" element={<User />} />
          <Route
            path="dashboard/*"
            element={<IsAuthorised element={<DashboardModule />} />}
          />
          <Route path="admin/*" element={<Admin />} />
          <Route path="*" element={<ResourceError errorCode={404} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
