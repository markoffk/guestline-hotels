import React from 'react';
import styled from '@emotion/styled';
import { Stack } from '../Layout/Stack';
import { Hotel, HotelRoomRates } from '../../../../lib/guestline/types/api';

type Props = {
  hotel: Hotel & { roomRates: HotelRoomRates };
  desiredAdults: number;
  desiredChildren: number;
};

export const HotelCard: React.FC<Props> = ({ hotel, desiredAdults, desiredChildren }) => {
  const filteredRooms = hotel.roomRates.rooms.filter((value) => {
    return (
      value.occupancy.maxAdults >= desiredAdults &&
      value.occupancy.maxChildren >= desiredChildren &&
      (value.occupancy.maxOverall === undefined || value.occupancy.maxOverall >= desiredAdults + desiredChildren)
    );
  });
  return (
    <Root>
      <Stack flexDirection="column" gap={24}>
        <Stack gap={8}>
          <div>image</div>
          <Stack flexDirection="column" gap={8} flex={1}>
            <span>{hotel.name}</span>
            <span>{hotel.address1}</span>
            <span>{hotel.address2}</span>
          </Stack>
          <div>{hotel.starRating}</div>
        </Stack>
        {!!filteredRooms.length &&
          filteredRooms.map((room) => (
            <Stack key={room.id} gap={24}>
              <div style={{ width: 100 }}>
                {room.name}
                <br />
                Adults: {room.occupancy.maxAdults}
                <br />
                Children: {room.occupancy.maxChildren}
                <br />
              </div>
              <div style={{ flex: 1 }}>{room.longDescription}</div>
            </Stack>
          ))}
        {!filteredRooms.length && <b>no rooms matching your criteria</b>}
      </Stack>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px dotted burlywood;
  padding: 24px;
`;
