import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import App from 'components/App';
import { GlobalStyles } from 'utils/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>
);
