import { SubscriptionType } from "../enums/SubscriptionType.enum";

export interface Subscription {
  startDate: Date;
  type: SubscriptionType;
}