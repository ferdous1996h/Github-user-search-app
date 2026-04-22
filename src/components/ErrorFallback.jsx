import { getErrorMessage } from 'react-error-boundary';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>User not found</p>
      {/* <h2>{error.message}</h2> */}
      <h2>{getErrorMessage(error)}</h2>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}
