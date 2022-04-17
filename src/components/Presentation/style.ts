import { theme } from "./../../constants/theme";
import styled from "styled-components";

export const PresentationStyled = styled.div`
  max-width: 500px;
  .presentation__title {
    font-size: 32px;
    font-weight: 600;
  }
  .presentation__description {
    margin-top: 30px;
  }
  .presentation__link {
    text-align: center;
    text-decoration: none;
    background-color: ${theme.colors.blue.normal};
    color: white;
    padding: 20px 50px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    display: block;
    width: 100%;
    margin-top: 20px;
    transition: all 0.3s;
    margin-top: 50px;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  .presentations__profile {
    margin-top: 30px;
    display: flex;
    align-items: center;
    & div {
      &:last-child {
        margin: 0px 10px;
      }
    }
  }
`;
