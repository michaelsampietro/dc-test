import { Customer } from "./Customer";
import { Payment } from "./Payment";

export type Order = {
  _id: string,
  customer: Customer[],
  store: string,
  amount: number,
  deliveryFee: number,
  payments: Payment[]
}