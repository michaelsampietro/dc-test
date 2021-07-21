import { Address } from "./Address";
import { Customer } from "./Customer";
import { Item } from "./Item";
import { Payment } from "./Payment";

export type Order = {
  _id: string,
  amount: number,
  deliveryFee: number,
  store: string,
  customer: Customer,
  address: Address,
  items: Item[]
  payments: Payment[],
}