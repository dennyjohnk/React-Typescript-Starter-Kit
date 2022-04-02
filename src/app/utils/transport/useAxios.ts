import { useContext } from 'react';

import { AxiosContext } from './axios.context';

export function useAxios() {
  return useContext(AxiosContext);
}
