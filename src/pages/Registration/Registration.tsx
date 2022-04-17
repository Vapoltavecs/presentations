import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import { Button } from "../../components/ui/Button/Button";
import Center from "../../components/ui/Center";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import { publicRoutesEnum } from "../../constants/routes";
import User from "../../services/User";
import { CheckboxStyled } from "./style";

export interface IAuth {
  email: string;
  password: string;
  name: string;
  last_name: string;
}

export const Registration: FC = () => {
  const [form, setForm] = useState<IAuth>({
    email: "",
    password: "",
    name: "",
    last_name: "",
  });

  const [isAllow, setAllow] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registration = useCallback(async (form: IAuth) => {
    try {
      await User.registration(form);
      navigate(publicRoutesEnum.authorization);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registration(form);
  };

  return (
    <Container>
      <Center fullHeight horizontal vertical>
        <Form title="Регистрация" width={500} onSubmit={onSubmit}>
          <>
            <Input
              onChange={changeForm}
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
            />
            <Input
              onChange={changeForm}
              name="last_name"
              type="text"
              placeholder="Last name"
              value={form.last_name}
            />
            <Input
              onChange={changeForm}
              name="email"
              type="text"
              placeholder="E-mail"
              value={form.email}
            />
            <Input
              onChange={changeForm}
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
            />
            <CheckboxStyled>
              <Input
                type="checkbox"
                name="isAllowed"
                value={isAllow}
                onChange={() => setAllow((prev) => !prev)}
                placeholder="allow"
              />
              <div>Я согласен с пользовательским соглашением</div>
            </CheckboxStyled>
            <Button
              onClick={onSubmit}
              type="submit"
              styleType="primary"
              disabled={!isAllow}
            >
              Зарегестрироваться
            </Button>
          </>
        </Form>
      </Center>
    </Container>
  );
};
