import { AxiosResponse } from "axios";
import $api from "../api";
import { IPresentation } from "./../models/Presentations";
class Presentations {
  static async getAll(): Promise<AxiosResponse<IPresentation[]>> {
    return await $api.get<IPresentation[]>("/api/presentations");
  }
  static async getByID(id: number): Promise<AxiosResponse<IPresentation>> {
    return await $api.get<IPresentation>(`/api/presentations/${id}`);
  }
}

export default Presentations;
