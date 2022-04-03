import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const DashboardPageComp: React.FC = () => {
  return (
    <Flex>
      <Text>Dashboard</Text>
    </Flex>
  );
};

export const DashboardPage = React.memo(DashboardPageComp);
export default DashboardPage;
