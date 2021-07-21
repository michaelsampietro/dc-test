import React from "react";
import { Card, Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import OrdersList from "./pages/OrdersList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "antd/dist/antd.css";
import styles from "./App.module.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import OrderDetail from "./pages/OrderDetail";

const App: React.FC = () => (
  <Layout>
    <header>
      <AppHeader />
    </header>
    <section className={styles.content}>
      <ApolloProvider client={client}>
        <Router>
          <Switch >
            <Route path="/pedido/:id" component={OrderDetail} />
            <Route path="/" component={OrdersList} />
          </Switch>
        </Router>
      </ApolloProvider>
    </section>
    <footer>
      <AppFooter />
    </footer>
  </Layout>
);

export default App;
