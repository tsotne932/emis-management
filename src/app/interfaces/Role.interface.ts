import { Permission } from "./Permission.interface";

export interface Role {
  name: string;
  id: number;
  permissions: Permission[]
}
