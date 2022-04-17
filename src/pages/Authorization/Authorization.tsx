import React, { FC, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../../components/form";
import Button from "../../components/ui/Button";
import Center from "../../components/ui/Center";
import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import { publicRoutesEnum } from "../../constants/routes";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAuthAction } from "../../redux/reducers/user";
import User from "../../services/User";
import { RegistrationStyle } from "./style";

export interface IAuth {
  email: string;
  password: string;
}

export const Authorization: FC = () => {
  const [form, setForm] = useState<IAuth>({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = useCallback(async (form: IAuth) => {
    try {
      const token = await User.login(form);
      console.log(token);
      localStorage.setItem("token", token.data.auth_token);
      dispatch(setAuthAction(true));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.email && form.password) {
      login(form);
    } else {
      alert("заполните все поля");
    }
  };

  return (
    <Container>
      <Center fullHeight horizontal vertical>
        <Form title="Авторизация" width={500} onSubmit={onSubmit}>
          <>
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
            <RegistrationStyle>
              Еще не зарегестрированы?{" "}
              <NavLink to={publicRoutesEnum.registration}>
                зарегестрироватьcя
              </NavLink>
            </RegistrationStyle>
            <Button onClick={onSubmit} type="submit" styleType="primary">
              Авторизоваться
            </Button>
          </>
        </Form>
      </Center>
    </Container>
  );
};
