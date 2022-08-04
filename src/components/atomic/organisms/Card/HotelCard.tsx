import React from 'react';
import styled from '@emotion/styled';
import { Stack } from '../Layout/Stack';
import { Hotel } from '../../../../lib/guestline/types/api';

type Props = {
  hotel: Hotel;
};

export const HotelCard: React.FC<Props> = ({ hotel }) => {
  return (
    <Root>
      <Stack flexDirection="column">
        <Stack gap={8}>
          <div>image</div>
          <Stack flexDirection="column" gap={8} flex={1}>
            <span>{hotel.name}</span>
            <span>{hotel.address1}</span>
            <span>{hotel.address2}</span>
          </Stack>
          <div>{hotel.starRating}</div>
        </Stack>
      </Stack>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  max-width: 600px;
`;
