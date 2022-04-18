import React, { FC, useCallback, useEffect, useState } from "react";
import { IPresentation } from "../../models/Presentations";
import { PresentationStyled } from "./style";
import Presentations from "../../services/Presentation";
import Loader from "../Loader";
import Profile from "../Profile";
import Avatar from "../avatar";
import Center from "../ui/Center";

export const Presentation: FC<{ id: number }> = ({ id = 4 }) => {
  const [presentation, setPresentation] = useState<IPresentation>();
  const [loading, setLoading] = useState<boolean>();
  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const presentation = await Presentations.getByID(id);
      setPresentation(presentation.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <Center vertical horizontal>
      <Loader />
    </Center>
  ) : presentation ? (
    <PresentationStyled>
      <Center vertical>
        <div>
          <div className="presentation__title">{presentation.title}</div>
          <div className="presentation__description">
            {presentation.description}
          </div>
          <div className="presentations__profile">
            <Avatar name={presentation.owner.name} size={40} />
            <div>
              {presentation.owner.name} {presentation.owner.last_name}
            </div>
          </div>
          <a
            href={presentation.presentation}
            className="presentation__link"
            download
          >
            Скачать презентацию
          </a>
        </div>
      </Center>
    </PresentationStyled>
  ) : (
    <div style={{ textAlign: "center" }}>presentation not found...</div>
  );
};
