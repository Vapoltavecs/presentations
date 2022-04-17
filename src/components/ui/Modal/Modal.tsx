import React, { FC, ReactChild } from "react";
import { ModalStyled } from "./style";
import ReactDOM from "react-dom";
import cross from "../../../assets/images/icons/cross.png";

interface IClose {
  children: ReactChild;
  closeModal: (e: React.MouseEvent) => void;
  width?: number;
  height?: number;
}

export const Modal: FC<IClose> = ({ children, closeModal, width, height }) => {
  return ReactDOM.createPortal(
    <ModalStyled>
      <div className="modal-wrapper">
        <div className="modal" style={{ minWidth: width, minHeight: height }}>
          <img src={cross} alt="close" onClick={closeModal} className="close" />
          <div> {children} </div>
        </div>
      </div>
      <div className="overlay"></div>
    </ModalStyled>,
    document.getElementById("modal")!
  );
};
