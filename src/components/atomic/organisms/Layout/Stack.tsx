import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

type Props = Pick<CSSProperties, 'flexDirection' | 'gap' | 'alignItems' | 'justifyContent' | 'flex'>;

export const Stack: React.FC<React.PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return <Root style={{ ...rest }}>{children}</Root>;
};

const Root = styled.div`
  display: flex;
`;
