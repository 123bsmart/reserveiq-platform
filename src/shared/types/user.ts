import { RoleEnum } from '../enum/auth.enum';

export interface IUser {
  id: number;
  name: string;
  email: string;
  company: string;
  role: RoleEnum;
  password: string;
  verified: boolean;
}
