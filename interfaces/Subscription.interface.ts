import { SubscriptionType } from "../enums/SubscriptionType.enum";

export interface Subscription {
  startDate: Date;
  endDate: Date;
  type: SubscriptionType;
}