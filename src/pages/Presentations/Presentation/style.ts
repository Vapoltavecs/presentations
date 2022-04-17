import { theme } from "./../../../constants/theme";
import styled from "styled-components";

export const PresentationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.gray.light};
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: rgb(119, 136, 153);
  }
  .presentation__profile {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;
