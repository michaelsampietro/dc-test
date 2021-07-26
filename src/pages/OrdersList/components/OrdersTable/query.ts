import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  query {
    orders {
      _id
      reference
      externalReference
      amount
      deliveryFee
      store
      customer {
        _id
        name
      }
      address {
        _id
        number
        neighborhood
        complement
        city
        state
        street
      }
      items {
        _id
        name
        amount
        quantity
        note
      }
      payments {
        _id
        method
        amount
      }
    }
  }
`;
