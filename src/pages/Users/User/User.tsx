import React, { FC, useState } from "react";
import Avatar from "../../../components/avatar";
import Profile from "../../../components/Profile";
import Modal from "../../../components/ui/Modal";
import { IUser } from "../../../models/User";
import { StyledUser } from "./style";

export const User: FC<IUser> = ({ name, email, last_name, id }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openModalCallback = () => setOpenModal(true);
  const closeModalCallback = () => setOpenModal(false);

  return (
    <>
      <StyledUser onClick={openModalCallback}>
        <div className="user__profile">
          <Avatar name={name} size={40} />
          <div>{name}</div>
          <div>{last_name}</div>
        </div>
        <div className="user__email">{email}</div>
      </StyledUser>
      {openModal && (
        <Modal closeModal={closeModalCallback}>
          <Profile id={id} />
        </Modal>
      )}
    </>
  );
};
