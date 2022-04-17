import styled from "styled-components";

export const AvatarStyled = styled.div<{
  color: string;
  size: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${(props) => (props.size > 50 ? 32 : 18)}px;
`;
