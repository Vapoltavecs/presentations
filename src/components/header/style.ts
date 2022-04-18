import { theme } from "./../../constants/theme";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
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
  nav {
    .close {
      display: none;
    }
  }
  .burger {
    cursor: pointer;
    display: none;
    & div {
      width: 30px;
      height: 3px;
      background-color: black;
      margin-top: 5px;
    }
  }
  @media (max-width: 900px) {
    nav {
      z-index: 100;
      transform: translateX(-100%);
      transition: all 0.3s;

      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.9);
      .close {
        display: block;
        position: absolute;
        width: 30px;
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li {
          margin-top: 30px;
          color: white;
          a {
            color: white;
          }
        }
      }
    }
    .header__menu.active {
      transform: translateX(0%);
    }

    .header__menu.active,
    html {
      overflow: hidden;
    }
    .burger {
      display: block;
    }
  }
`;
