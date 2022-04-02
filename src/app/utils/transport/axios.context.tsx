import { useToast } from '@chakra-ui/react';
import Axios, { AxiosInstance } from 'axios';
import React, { createContext, ReactNode, useMemo } from 'react';

import { AppRoutes } from '../../config/config';
import { getLocalAppStateValue } from '../../data/app-state/persist';

const baseURL = process.env.REACT_APP_API_URL || 'https://backend-staging.skateboard.com';
const baseAxios = Axios.create({
  baseURL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AxiosContext = createContext<AxiosInstance>(baseAxios);

export function AxiosProvider({ children }: { children?: ReactNode }) {
  const toast = useToast();

  const axios = useMemo(() => {
    baseAxios.interceptors.request.use((config) => {
      // Read token for Authorization header, in this case directly from localStorage
      const { token } = getLocalAppStateValue();
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    });

    baseAxios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (401 === error.response?.status) {
          toast({
            title: 'Your token expired',
            description: 'Please login again.',
            status: 'error',
            isClosable: true,
            duration: 3000,
          });
          localStorage.clear();
          if (window.location.pathname !== AppRoutes.LOGIN) {
            window.location.pathname = AppRoutes.LOGIN;
          }

          return Promise.reject('Session expired');
        }
        return Promise.reject(error.response?.data?.error_message || error);
      }
    );

    return baseAxios;
  }, [toast]);

  return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>;
}
