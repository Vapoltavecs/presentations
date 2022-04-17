import React, { FC } from "react";
import { generateColors } from "../../utils/generateColors";
import { AvatarStyled } from "./style";

type Props = {
  name: string;
  size: number;
};

export const Avatar: FC<Props> = ({ name, size }) => {
  return (
    <AvatarStyled size={size} color={generateColors()}>
      {name.substring(0, 1)}
    </AvatarStyled>
  );
};
