import { RoleEnum } from '@/shared/enum/auth.enum';
import { IUser } from '@/shared/types/user';

export interface ISignUpReq {
  name: string;
  email: string;
  company: string;
  role: RoleEnum;
  password: string;
  recaptchaToken: string;
}

export interface ILoginReq {
  email: string;
  password: string;
  recaptchaToken: string;
}

export interface ILoginRespData {
  user: IUser;
  access_token: string;
  refresh_token: string;
}
