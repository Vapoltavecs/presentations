export interface IAuthorization {
  email: string;
  password: string;
}

export interface IRegistration extends IAuthorization {
  name: string;
  last_name: string;
}

export interface IUser {
  name: string;
  last_name: string;
  id: number;
  email: string;
}
