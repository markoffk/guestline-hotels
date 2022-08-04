import React from 'react';
import styled from '@emotion/styled';
import { Stack } from '../organisms/Layout/Stack';

type Props = {};

export const MainTemplate: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Stack flexDirection="column" alignItems="center">
      <Content>{children}</Content>
    </Stack>
  );
};

const Content = styled.div`
  max-width: 900px;
  width: 100%;
`;
