import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { StatusBar } from '../features/StatusBar/StatusBar';
import { DashboardPage } from '../pages';

const HomePageComp: React.FC = () => {
  return (
    <Flex h="full" w="full" direction="row-reverse" zIndex="base" gap={5}>
      <Flex as="main" w="full" direction="row" flex={1}>
        <Routes>
          <Route index element={<DashboardPage />} />
        </Routes>
      </Flex>
      <StatusBar />
    </Flex>
  );
};

export const HomePage = React.memo(HomePageComp);
export default HomePage;
