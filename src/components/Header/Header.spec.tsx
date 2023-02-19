import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Header, urlOptions } from './Header';

describe('Header component', () => {
  it('should render all the urls', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    urlOptions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('should redirect to right page', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    urlOptions.forEach(({ name, path }) => {
      const urlTag = getByText(name);

      expect(urlTag).toHaveAttribute('href', path);
    });
  });
});
