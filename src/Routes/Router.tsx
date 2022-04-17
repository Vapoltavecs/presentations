import React, { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import {
  privateRoutes,
  publicRoutes,
  publicRoutesEnum,
} from "../constants/routes";
import { useAppSelector } from "../hooks/reduxHooks";

export const AppRouter: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <BrowserRouter>
      {isAuth ? (
        <div>
          <Header />
          <Routes>
            {privateRoutes.map((route, i) => (
              <Route
                element={<route.component />}
                path={route.exact ? route.path : `${route.path}/*`}
                key={i}
              />
            ))}
            <Route path="*" element={<Navigate to="/presentations/" />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          {publicRoutes.map((route, i) => (
            <Route
              element={<route.component />}
              path={route.exact ? route.path : `${route.path}/*`}
              key={i}
            />
          ))}
          <Route
            path="*"
            element={<Navigate to={publicRoutesEnum.authorization} />}
          />
        </Routes>
      )}
    </BrowserRouter>
  );
};
