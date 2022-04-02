import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { StatusBar } from '../features/StatusBar/StatusBar';
import { DashboardPage } from '../pages';

const HomePageComp: React.FC = () => {
  return (
    <Flex h="full" w="full" bg="white" direction="row-reverse" zIndex="base">
      <Flex as="main" w="full" bg={'white'} direction="row" flex={1}>
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
