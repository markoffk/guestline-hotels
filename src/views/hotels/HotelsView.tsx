import React, { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGuestlineApi } from '../../lib/guestline/useGuestlineApi';
import { HotelCard } from '../../components/atomic/organisms/Card/HotelCard';
import { Stack } from '../../components/atomic/organisms/Layout/Stack';
import { Filter, FilterBar } from '../../components/atomic/organisms/FilterBar/FilterBar';

export const HotelsView = () => {
  const api = useGuestlineApi();
  const hotelsQuery = useQuery(['/hotels'], () => api['/hotels'].get({ queryParams: { 'collection-id': 'OBMNG' } }), {
    initialData: [],
  });
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
        <Stack flexDirection="column" alignItems="center" gap={24}>
          {hotelsQuery.data
            .filter((value) => {
              return Number(value.starRating) >= filter.stars;
            })
            .map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </Stack>
      )}
    </Stack>
  );
};
