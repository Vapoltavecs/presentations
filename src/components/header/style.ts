import { theme } from "./../../constants/theme";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    li {
      margin: 0 20px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: ${theme.colors.blue.normal};
      }
      & a {
        text-decoration: none;
        color: black;
        transition: all 0.3s;
        &:hover {
          color: ${theme.colors.blue.normal};
        }
      }
    }
  }
`;
