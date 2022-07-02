import React, { lazy, Suspense } from 'react';

const LazyCountryComp = lazy(() => import('./CountryComp'));

const CountryComp = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCountryComp {...props} />
  </Suspense>
);

export default CountryComp;
