import React, { FC, useCallback, useEffect, useState } from "react";
import { IUser } from "../../models/User";
import User from "../../services/User";
import Avatar from "../avatar";
import Loader from "../Loader";

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

  console.log(profile)

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <Loader />
  ) : profile ? (
    <div>
      <Avatar size={90} name={profile.name} />
    </div>
  ) : (
    <div style={{ textAlign: "center" }}>profile not found...</div>
  );
};
