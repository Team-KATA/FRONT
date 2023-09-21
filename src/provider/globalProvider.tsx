import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from 'src/redux/reducer/configureStore';

import { ThemeProvider } from 'styled-components';
import GlobalStyle, { GlobalStyleType } from 'styles/global.styles';

import AosInitializer from 'Hoc/aosWrapper/initializer';

const store: any = configureStore();
const persistor = persistStore(store);
const globalStyle: GlobalStyleType = GlobalStyle;

const GlobalProvider: React.FC<any> = ({ children }) => {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <PersistGate loading={<></>} persistor={persistor}>
            <ThemeProvider theme={globalStyle}>
              <Suspense fallback={<h1>Loading...</h1>}>
                <AosInitializer>{children}</AosInitializer>
              </Suspense>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </CookiesProvider>
    </>
  );
};

export default GlobalProvider;
