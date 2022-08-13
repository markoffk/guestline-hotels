import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGuestlineApi } from '../../lib/guestline/useGuestlineApi';
import { HotelCard } from '../../components/atomic/organisms/Card/HotelCard';
import { Stack } from '../../components/atomic/organisms/Layout/Stack';
import { Filter, FilterBar } from '../../components/atomic/organisms/FilterBar/FilterBar';

export const HotelsView = () => {
  const api = useGuestlineApi();
  const hotelsQuery = useQuery(
    ['/hotels'],
    async () => {
      const hotels = await api['/hotels'].get({ queryParams: { 'collection-id': 'OBMNG' } });

      return (
        await Promise.all(
          hotels.map((hotel) =>
            Promise.all([
              hotel,
              api['/roomRates/:collectionId/:hotelId'].get({
                params: {
                  collectionId: 'OBMNG',
                  hotelId: hotel.id,
                },
              }),
            ])
          )
        )
      ).flatMap(([hotel, roomRates]) => ({ ...hotel, roomRates }));
    },
    {
      initialData: [],
    }
  );
  const [filter, setFilter] = useState<Filter>();

  const onFilterChange = useCallback(
    (filter: Filter) => {
      setFilter(filter);
    },
    [setFilter]
  );

  return (
    <Stack flexDirection="column" gap={24}>
      <FilterBar onChange={onFilterChange} />
      {filter && (
        <Stack flexDirection="column" alignItems="center" gap={48}>
          {hotelsQuery.data
            .filter((value) => Number(value.starRating) >= filter.stars)
            .map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                desiredAdults={filter.desiredAdults}
                desiredChildren={filter.desiredChildren}
              />
            ))}
        </Stack>
      )}
    </Stack>
  );
};
