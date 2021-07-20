type Order = {
  _id: string,
  customer: Customer[],
  store: string,
  amount: number,
  deliveryFee: number,
  payments: Payment[]
}

type Payment = {
  method?: string,
  amount: number,
}

type Customer = {
  _id?: string,
  name: string
}

export type Orders = {
  orders: Order[]
}
