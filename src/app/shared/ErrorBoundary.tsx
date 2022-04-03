import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
    </div>
  );
}

export const AppErrorBoundary: React.FC = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
