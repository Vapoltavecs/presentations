import { theme } from "./../../constants/theme";
import styled from "styled-components";

export const UploadPresentationStyle = styled.div`
  text-align: center;
  padding-top: 30px;
  form {
    box-shadow: none;
  }
  .upload__files {
    margin-top: 20px;
    position: relative;
    cursor: pointer;
    background-color: lightgray;
    &-input {
      width: 300px;
      height: 200px;
      font-size: 0px;
      opacity: 0;
      z-index: 1;
      cursor: pointer;
    }
    &::after {
      content: "Загрузите файл..";
      z-index: 1;
      position: absolute;
      left: 50%;
      top: 50%;
      cursor: pointer;
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;
