import { useState } from "react";
import { NavLink } from "react-router-dom";
import { privateRoutesEnum } from "../../constants/routes";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAuthAction } from "../../redux/reducers/user";
import Modal from "../ui/Modal";
import { UploadPresentation } from "../UploadPresentation/Upload";
import { StyledHeader } from "./style";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [createPresentationModal, setCreatePresentationModal] =
    useState<boolean>(false);
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setAuthAction(false));
  };

  const createPresentation = () => setCreatePresentationModal(true);
  const closePresentation = () => setCreatePresentationModal(false);
  return (
    <>
      <StyledHeader>
        <div className="header__logo">Logo</div>
        <nav className="header__menu">
          <ul>
            <li className="header__menu-item" onClick={createPresentation}>
              Загрузить презентацию
            </li>
            <li className="header__menu-item">
              <NavLink to={privateRoutesEnum.presentations}>
                Все презентации
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={privateRoutesEnum.users}>Пользователи</NavLink>
            </li>
            <li className="header__menu-item" onClick={logout}>
              Выйти
            </li>
          </ul>
        </nav>
      </StyledHeader>
      {createPresentationModal && (
        <Modal closeModal={closePresentation} width={500}>
          <UploadPresentation />
        </Modal>
      )}
    </>
  );
};
