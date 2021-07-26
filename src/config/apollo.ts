import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://teste.deliverycenter.io/graphql?',
  cache: new InMemoryCache(),
});
