import React, { FC, useCallback, useEffect, useState } from "react";
import { IUser } from "../../models/User";
import User from "../../services/User";
import Avatar from "../avatar";
import Loader from "../Loader";

import Title from "../ui/Title";
import { ProfileStyled } from "./style";

export const Profile: FC<{ id: number }> = ({ id = 4 }) => {
  const [profile, setProfile] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>();
  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const user = await User.getByID(id);
      setProfile(user.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log(profile);

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <Loader />
  ) : profile ? (
    <ProfileStyled>
      <div className="profile__avatar">
        <Avatar size={150} name={profile.name} />
      </div>
      <Title className="profile__title">{profile.name}</Title>
      <div className="profile__lastname">{profile.last_name}</div>
      <div className="profile__email">{profile.email}</div>
    </ProfileStyled>
  ) : (
    <div style={{ textAlign: "center" }}>profile not found...</div>
  );
};
