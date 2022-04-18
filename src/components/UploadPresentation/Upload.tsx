import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPresentationUpload } from "../../models/Presentations";
import Presentations from "../../services/Presentation";
import Form from "../form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Title from "../ui/Title";
import { UploadPresentationStyle } from "./style";

export const UploadPresentation: FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<IPresentationUpload>({
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const [presentation, setPresentation] = useState<File>();

  const createPresentation = useCallback(async (form: IPresentationUpload) => {
    console.log(presentation);
    try {
      setLoading(true);
      await Presentations.create({ ...form });
      onClose();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPresentation({ ...form, presentation });
  };

  const onUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPresentation(e.target.files![0]);
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
            name="description"
            placeholder="Описание"
            value={form.description}
            type="text"
          />
          <div className="upload__files">
            <input
              type="file"
              className="upload__files-input"
              accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              onChange={onUploadInput}
            />
          </div>
          {presentation && presentation.name}
          <Button type="submit" onClick={onSubmit} styleType="primary">
            {loading ? "Загрузка..." : "Загузирть презентацию"}
          </Button>
        </>
      </Form>
    </UploadPresentationStyle>
  );
};
