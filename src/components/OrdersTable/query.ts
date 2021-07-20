import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query {
    orders {
      _id
      customer {
        name
      }
      store
      amount
      deliveryFee
      payments {
        amount
      }
    }
  }
`;