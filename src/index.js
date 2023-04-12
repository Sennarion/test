import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import { store } from 'redux/store';
import { GlobalStyleComponent } from 'styles/GlobalStyles.styled';
import App from 'components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyleComponent />
    </Provider>
  </React.StrictMode>
);
