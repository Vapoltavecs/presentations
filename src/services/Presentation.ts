import { AxiosResponse } from "axios";
import $api from "../api";
import { IPresentation, IPresentationUpload } from "./../models/Presentations";
class Presentations {
  static async getAll(): Promise<AxiosResponse<IPresentation[]>> {
    return await $api.get<IPresentation[]>("/api/presentations");
  }
  static async getByID(id: number): Promise<AxiosResponse<IPresentation>> {
    return await $api.get<IPresentation>(`/api/presentations/${id}`);
  }
  static async create(
    presentation: IPresentationUpload
  ): Promise<AxiosResponse<IPresentation>> {
    const presentationForm = new FormData();
    presentationForm.append("title", presentation.title);
    presentationForm.append("description", presentation.description);
    presentation.presentation &&
      presentationForm.append("presentation", presentation.presentation);
    console.log(presentation);
    return await $api.post<IPresentation>(
      "/api/presentations/",
      presentationForm
    );
  }
}

export default Presentations;
