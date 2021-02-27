import { Branch } from "./Branch.interface";
import { Personal } from "./Person.interface";

export interface Institution {
  name: string;
  number: string;
  pid: string;
  id: number;
  branches: Branch[]
  personal: Personal[]
}
