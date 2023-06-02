import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../../Pages/Layout";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import React, { Suspense, useEffect, useState } from "react";
import fetchViaToken from "../../APIHandler/User/fetchViaToken";
import {
  ACCOUNTS,
  ADMIN,
  CONSULTANT,
  COOKIE,
  DASHBOARD,
  PATWARI,
  USER,
} from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";
import IsAuthorised from "../Navigation/IsAuthorised.tsx";
import Home from "../../Pages/Home.tsx";
import Splash from "../../Pages/Splash.tsx";
import { Accounts } from "../../Pages/Accounts.tsx";
import { Consultant } from "../../Pages/Consultant.tsx";
import { Patwari } from "../../Pages/Patwari.tsx";
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
          response.UserType,
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
          <Route path={`${USER.INDEX}/*`} element={<User />} />
          <Route
            path={`${DASHBOARD.INDEX}/*`}
            element={
              <IsAuthorised userType={1} element={<DashboardModule />} />
            }
          />
          <Route
            path={`${ADMIN.INDEX}/*`}
            element={<IsAuthorised userType={2} element={<Admin />} />}
          />
          <Route
            path={`${ACCOUNTS.INDEX}/*`}
            element={<IsAuthorised userType={5} element={<Accounts />} />}
          />
          <Route
            path={`${PATWARI.INDEX}/*`}
            element={<IsAuthorised userType={4} element={<Patwari />} />}
          />
          <Route
            path={`${CONSULTANT.INDEX}/*`}
            element={<IsAuthorised userType={3} element={<Consultant />} />}
          />

          <Route path="*" element={<ResourceError errorCode={404} />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
