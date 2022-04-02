import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from './app/config/theme';
import { AppStateStore } from './app/data/app-state';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppStateStore>
        <QueryClientProvider client={queryClient}>
          {/*<ReactQueryDevtools />*/}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </QueryClientProvider>
      </AppStateStore>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
