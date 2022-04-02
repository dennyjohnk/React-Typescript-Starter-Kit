import React from 'react';

const StatusBarComp: React.FC = () => {
  return <p>Status bar</p>;
};

export const StatusBar = React.memo(StatusBarComp);
export default StatusBar;
