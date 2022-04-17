import React, { FC, ReactChild } from "react";
import { StyledForm } from "./style";

type Props = {
  title?: string;
  children: ReactChild;
  width?: number;
  height?: number;
  onSubmit: (e: React.FormEvent) => void;
};

export const Form: FC<Props> = ({
  title,
  children,
  width,
  height,
  onSubmit,
}) => {
  return (
    <StyledForm width={width} height={height} onSubmit={onSubmit}>
      <h3>{title}</h3>
      {children}
    </StyledForm>
  );
};
