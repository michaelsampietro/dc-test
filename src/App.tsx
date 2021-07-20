import React from 'react';
import { Card, Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import OrdersList from './pages/OrdersList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import "antd/dist/antd.css";
import styles from './App.module.css';


const App: React.FC = () => (
  <Layout>
    <header>
      <AppHeader />
    </header>
    <section className={styles.content}>
      <Router>
        <Switch>
          <Route path="/" component={OrdersList} />
        </Switch>
      </Router>
    </section>
    <footer>
      <AppFooter />
    </footer>
  </Layout>
);

export default App;