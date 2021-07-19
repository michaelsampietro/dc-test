import React from 'react';
import { Card, Layout } from 'antd';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import "antd/dist/antd.css";
import styles from './App.module.css';

const App: React.FC = () => (
  <Layout>
    <header>
      <AppHeader />
    </header>
    <section className={styles.content} >
      <Card>
        Content
      </Card>
    </section>
    <footer>
      <AppFooter />
    </footer>
  </Layout>
);

export default App;