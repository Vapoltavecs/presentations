import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import { IUser } from "../../models/User";
import UserService from "../../services/User";
import { User } from "./User/User";

export const Users = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const getUsers = async () => {
    try {
      const users = await UserService.getAll();
      setUsers(users.data);
      setloading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Пользователи</Title>
      {loading ? (
        <Loader />
      ) : users.length > 0 ? (
        users.map((el) => <User {...el} />)
      ) : (
        "Пользователи не найдены"
      )}
    </Container>
  );
};
