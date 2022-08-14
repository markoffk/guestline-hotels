import { CSSProperties } from 'react';
import styled from '@emotion/styled';

type Props = Pick<CSSProperties, 'flexDirection' | 'gap' | 'alignItems' | 'justifyContent' | 'flex'>;

export const Stack = styled.div<Props>`
  display: flex;
  ${(p) => p.flexDirection && `flex-direction: ${p.flexDirection};`}
  ${(p) => p.gap && `gap: ${p.gap}px;`}
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
  ${(p) => p.flex && `flex: ${p.flex};`}
`;
