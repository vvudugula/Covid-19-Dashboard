import React, { lazy, Suspense } from 'react';

const LazyDisplaylist = lazy(() => import('./Displaylist'));

const Displaylist = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDisplaylist {...props} />
  </Suspense>
);

export default Displaylist;
