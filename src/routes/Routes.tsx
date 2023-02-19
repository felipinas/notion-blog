import { useRoutes } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout';

import { AboutMe } from '../view/AboutMe';
import { Home } from '../view/Home';

export function Routes() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      ),
    },
    { path: '/blog', element: <DefaultLayout>blog</DefaultLayout> },
    {
      path: '/about-me',
      element: (
        <DefaultLayout>
          <AboutMe />
        </DefaultLayout>
      ),
    },
  ]);

  return routes;
}
