import { useRoutes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';

export function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DefaultLayout>home</DefaultLayout>,
    },
    { path: '/blog', element: <DefaultLayout>blog</DefaultLayout> },
    { path: '/about-me', element: <DefaultLayout>about-me</DefaultLayout> },
  ]);

  return routes;
}
