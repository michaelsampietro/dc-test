import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ConfigProvider } from 'antd';
import pt_BR from 'antd/lib/locale/pt_BR';

ReactDOM.render(
  <ConfigProvider locale={pt_BR}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root'),
);
