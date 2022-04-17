import Registration from "./../pages/Registration";
import { FC } from "react";
import Authorization from "../pages/Authorization";
import Presentations from "../pages/Presentations";
import Users from "../pages/Users";

interface IRoute {
  path: string;
  exact: boolean;
  component: FC;
}

export enum publicRoutesEnum {
  authorization = "/auth/login",
  registration = "/auth/registration",
}

export enum privateRoutesEnum {
  presentations = "/presentations",
  users = "/users",
}

export const privateRoutes: IRoute[] = [
  {
    path: privateRoutesEnum.presentations,
    exact: true,
    component: Presentations,
  },
  {
    path: privateRoutesEnum.users,
    exact: true,
    component: Users,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: publicRoutesEnum.authorization,
    exact: true,
    component: Authorization,
  },
  {
    path: publicRoutesEnum.registration,
    exact: true,
    component: Registration,
  },
];
