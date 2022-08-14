import React, { useState } from 'react';
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

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Root data-hotel-star-rating={hotel.starRating}>
      <Stack flexDirection="column" gap={24}>
        <Stack gap={8}>
          <Stack>
            <button disabled={imageIndex <= 0} onClick={(_) => setImageIndex(imageIndex - 1)}>
              &lt;
            </button>
            <HotelImageWrapper>
              {hotel.images[imageIndex] && (
                <HotelImage src={hotel.images[imageIndex].url} alt={`Image ${imageIndex}`} />
              )}
            </HotelImageWrapper>
            <button disabled={imageIndex >= hotel.images.length - 1} onClick={(_) => setImageIndex(imageIndex + 1)}>
              &gt;
            </button>
          </Stack>
          <Stack flexDirection="column" gap={8} flex={1}>
            <span>{hotel.name}</span>
            <span>{hotel.address1}</span>
            <span>{hotel.address2}</span>
          </Stack>
          <div>&#9733; {hotel.starRating}</div>
        </Stack>
        {!!filteredRooms.length &&
          filteredRooms.map((room) => (
            <Stack key={room.id} gap={24}>
              <div
                style={{ width: 100 }}
                data-room-max-adults={room.occupancy.maxAdults}
                data-room-max-children={room.occupancy.maxChildren}
              >
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

const HotelImageWrapper = styled.div`
  width: 180px;
  height: 100px;
  text-align: center;
`;

const HotelImage = styled.img`
  width: auto;
  max-height: 100px;
`;
