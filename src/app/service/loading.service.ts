import { BehaviorSubject } from 'rxjs';

export class Loading {
  public static do: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() {
  }
}
