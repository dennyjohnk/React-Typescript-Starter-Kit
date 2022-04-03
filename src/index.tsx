import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from './app/config/theme';
import { AppStateStore } from './app/data/app-state';
import { AppErrorBoundary } from './app/shared/ErrorBoundary';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppErrorBoundary>
        <AppStateStore>
          <QueryClientProvider client={queryClient}>
            {/*<ReactQueryDevtools />*/}
            <ColorModeScript />
            <App />
          </QueryClientProvider>
        </AppStateStore>
      </AppErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
