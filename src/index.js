import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from 'components/App/App';
import GlobalStyles from './styles';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
