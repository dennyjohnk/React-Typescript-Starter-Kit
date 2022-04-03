import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes } from './app/config/config';
import { HomePage } from './app/pages';
import { SignInPage } from './app/pages/auth/SignInPage';
import PrivateRoute from './app/shared/PrivateRoute';

const App: React.FC = () => {
  return (
    <Flex minH="100vh" direction={'column'} flex={1}>
      <Container maxW={'full'} minH={'100vh'} p={0} centerContent={true}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.LOGIN} element={<SignInPage />} />
            {/* HomePage Component loads the commonly required api calls and manages the children routes */}
            <Route path="/*" element={<PrivateRoute component={HomePage} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Flex>
  );
};

export default App;
