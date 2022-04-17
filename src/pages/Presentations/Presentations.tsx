import React, { useCallback, useEffect, useState } from "react";
import { IPresentation } from "../../models/Presentations";
import { Presentation } from "./Presentation/Presentation";
import PresentationsService from "../../services/Presentation";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import Margin from "../../components/ui/Margin";
import Center from "../../components/ui/Center";
import Loader from "../../components/Loader";

export const Presentations = () => {
  const [presentations, setPresentations] = useState<IPresentation[]>([]);
  const [loading, setloading] = useState<boolean>(false);

  const getPresentations = async () => {
    try {
      setloading(true);
      const presentations = await PresentationsService.getAll();
      setPresentations(presentations.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getPresentations();
  }, []);

  return (
    <Container>
      <Title>Презентации</Title>

      <Margin margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
        {loading ? (
          <Center horizontal vertical>
            <Loader />
          </Center>
        ) : presentations.length > 0 ? (
          presentations.map((el, i) => <Presentation {...el} key={i} />)
        ) : (
          "Презентации не найдены"
        )}
      </Margin>
    </Container>
  );
};
