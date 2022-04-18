import React, { FC, useState } from "react";
import Avatar from "../../../components/avatar";
import PresentationModal from "../../../components/Presentation";
import Modal from "../../../components/ui/Modal";
import { IPresentation } from "../../../models/Presentations";
import { PresentationStyled } from "./style";

export const Presentation: FC<IPresentation> = ({ title, id, owner }) => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <PresentationStyled>
      <div onClick={openModal}>{title.substring(0, 10)}...</div>
      <div className="presentation__profile" onClick={openModal}>
        <div style={{ marginRight: 10 }}>{owner.last_name.substring(0, 10)}..</div>
        <Avatar size={40} name={owner.name} />
      </div>
      {isOpenModal && (
        <Modal closeModal={closeModal} width={300}>
          <PresentationModal id={id} />
        </Modal>
      )}
    </PresentationStyled>
  );
};
