import React from 'react';

const DashboardPageComp: React.FC = () => {
  return <p>Dashboard page</p>;
};

export const DashboardPage = React.memo(DashboardPageComp);
export default DashboardPage;
