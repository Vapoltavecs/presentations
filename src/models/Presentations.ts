import { IUser } from "./User";
export interface IPresentation {
  title: string;
  presentation: string;
  description: string;
  owner: IUser;
  id: number;
}

export interface IPresentationUpload {
  title: string;
  presentation?: File;
  description: string;
}
