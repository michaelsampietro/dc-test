import { gql } from "@apollo/client";

export const GET_ORDERS_SUMMARY = gql`
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