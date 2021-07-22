// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ordersSlice } from './app/features/order'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { orders: ordersSlice.reducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>{children}</Provider>
      </ApolloProvider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }