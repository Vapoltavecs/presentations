import React, { FC } from "react";
import { IUser } from "../../../models/User";
import { StyledUser } from "./style";

export const User: FC<IUser> = ({ name, email, last_name, id }) => {
  return <StyledUser>{name}</StyledUser>;
};
