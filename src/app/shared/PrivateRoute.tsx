import React from 'react';
import { Navigate } from 'react-router-dom';

import { AppRoutes } from '../config/config';
import { useAppState } from '../data/app-state';

type Props = {
  component: React.ComponentType;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const PrivateRouteComp: React.FC<Props> = ({ component: Component, ...rest }) => {
  // token is persisted in localstorage (Refer: useAppState.tsx) and is hydrated on load
  //const [{ token }] = useAppState();
  const [{ token }] = useAppState();
  if (!Component) {
    return <Navigate to={{ pathname: AppRoutes.AUTH }} />;
  } else if (token) {
    return <Component {...rest} />;
  }

  return (
    <Navigate
      to={{
        pathname: AppRoutes.LOGIN,
      }}
    />
  );
};

export const PrivateRoute = React.memo(PrivateRouteComp);
export default PrivateRoute;
