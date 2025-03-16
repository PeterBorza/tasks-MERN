import { PropsWithChildren, Suspense } from "react";
import { ErrorBoundary as ErrorCatcher } from "react-error-boundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

// TODO Add error and loading components to app!!!
// Configure error boundary and suspense by taking advantage of the library and the suspense component

const ErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorCatcher
          onError={console.error}
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div>
              There was an error!
              <button onClick={() => resetErrorBoundary()}>Try again</button>
            </div>
          )}
        >
          <Suspense fallback={<div>...Loading</div>}>{children}</Suspense>
        </ErrorCatcher>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundary;
