import React, { lazy, Suspense } from 'react';

const LazyMetrics = lazy(() => import('./Metrics'));

const Metrics = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMetrics {...props} />
  </Suspense>
);

export default Metrics;
