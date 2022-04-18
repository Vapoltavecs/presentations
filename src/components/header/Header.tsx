import { useState } from "react";
import { NavLink } from "react-router-dom";
import { privateRoutesEnum } from "../../constants/routes";
import { useAppDispatch } from "../../hooks/reduxHooks";

import { setAuthAction } from "../../redux/reducers/user";
import Container from "../ui/Container";
import Modal from "../ui/Modal";
import { UploadPresentation } from "../UploadPresentation/Upload";
import { StyledHeader } from "./style";
import close from "../../assets/images/icons/cross-white.png";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [createPresentationModal, setCreatePresentationModal] =
    useState<boolean>(false);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(setAuthAction(false));
  };

  const createPresentation = () => setCreatePresentationModal(true);
  const closePresentation = () => setCreatePresentationModal(false);

  const openMobileMenu = () => setOpenMobileMenu(true);
  const closeMobileMenu = () => setOpenMobileMenu(false);

  return (
    <Container>
      <StyledHeader>
        <div className="header__logo">Logo</div>
        <nav
          className={isOpenMobileMenu ? "active header__menu" : "header__menu"}
        >
          <img
            src={close}
            alt="close"
            className="close"
            onClick={closeMobileMenu}
          />
          <ul onClick={closeMobileMenu}>
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
        <div className="burger" onClick={openMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </StyledHeader>
      {createPresentationModal && (
        <Modal closeModal={closePresentation} width={300}>
          <UploadPresentation onClose={closePresentation} />
        </Modal>
      )}
    </Container>
  );
};
