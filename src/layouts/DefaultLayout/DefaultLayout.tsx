import { Header } from '../../components/Header';

import { DefaultLayoutProps } from './types';

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
}
