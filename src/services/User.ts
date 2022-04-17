import { AxiosResponse } from "axios";
import $api from "../api";
import { IAuthorization, IRegistration, IUser } from "../models/User";

class User {
  static async login(
    user: IAuthorization
  ): Promise<AxiosResponse<{ auth_token: string }>> {
    return await $api.post("/api/token/login/", user);
  }
  static async registration(user: IRegistration): Promise<void> {
    console.log(user);
    return await $api.post("/api/users/", user);
  }
  static async getMe(): Promise<AxiosResponse<IUser>> {
    return $api.get("/api/users/me");
  }
  static async getAll(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/api/users/");
  }
  static async getByID(id: number): Promise<AxiosResponse<IUser>> {
    return $api.get<IUser>(`/api/users/${id}/`);
  }
}

export default User;
