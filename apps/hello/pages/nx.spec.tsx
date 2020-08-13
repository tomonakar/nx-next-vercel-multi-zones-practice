import React from 'react';
import { render } from '@testing-library/react';

import Nx from './nx';

describe(' Nx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nx />);
    expect(baseElement).toBeTruthy();
  });
});
