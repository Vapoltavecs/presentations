import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/reduxHooks";
import { setAuthAction } from "./redux/reducers/user";
import { AppRouter } from "./Routes/Router";

export const App = () => {
  const dispatch = useAppDispatch();

  const initApp = () => {
    const token = localStorage.getItem("token");
    if (token) dispatch(setAuthAction(true));
  };

  useEffect(() => initApp(), []);
  return <AppRouter />;
};
