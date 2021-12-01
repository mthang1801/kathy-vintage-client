import React from 'react';
import App from './src/app/App';
import './src/i18n';
import { ThemeProvider } from './src/theme';
import { theme } from './src/theme/theme';
import './src/database/firebase';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'typeface-pt-mono';
import 'whatwg-fetch';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './src/fonts/index.css';
import './src/styles/preloader.scss';
import { StylesProvider } from '@material-ui/core/styles';
export const wrapRootElement = ({ element }) => {
  if (typeof window === 'undefined') {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <StylesProvider injectFirst>
            <App>{element}</App>
          </StylesProvider>
        </Provider>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StylesProvider injectFirst>
            <App>{element}</App>
          </StylesProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
