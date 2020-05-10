import { Subscription } from '../interfaces/Subscription.interface';

export class User {
  _id: number;
  name: string;
  email: string;
  membership: Subscription;

  constructor(name: string) {
    this.name = name;
  }
}


