import { Role } from "../interfaces/Role.interface";

export class User {
  email: string;
  name: string;
  id: number;
  roles: Role[]
}

