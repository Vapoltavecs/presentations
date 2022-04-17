import React, { useCallback, useState } from "react";
import { IPresentationUpload } from "../../models/Presentations";
import Form from "../form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Title from "../ui/Title";
import { UploadPresentationStyle } from "./style";

export const UploadPresentation = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IPresentationUpload>({
    title: "",
    description: "",
    presentation: undefined,
  });

  const createPresentation = useCallback(async (form: IPresentationUpload) => {
    try {
    } catch (error) {}
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPresentation(form);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <UploadPresentationStyle>
      <Title>Загрузка презенатции</Title>
      <Form onSubmit={onSubmit}>
        <>
          <Input
            onChange={onChange}
            name="title"
            placeholder="Название"
            value={form.title}
            type="text"
          />
          <Input
            onChange={onChange}
            name="title"
            placeholder="Описание"
            value={form.title}
            type="text"
          />
          <Input
            onChange={onChange}
            name="title"
            placeholder="Название"
            value={form.title}
            type="file"
          />
          <Button type="submit" onClick={onSubmit} styleType="primary">
            Загрузить презентацию
          </Button>
        </>
      </Form>
    </UploadPresentationStyle>
  );
};
