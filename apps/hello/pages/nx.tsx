import React from 'react';

import styled from 'styled-components';

import { Ui } from 'libs/ui/src'

/* eslint-disable-next-line */
export interface NxProps {}

const StyledNx = styled.div`
  color: pink;
`;

export const Nx = (props: NxProps) => {
  return (
    <StyledNx>
      <h1>Welcome to Nx!</h1>
      <Ui/>
    </StyledNx>
  );
};

export default Nx;
