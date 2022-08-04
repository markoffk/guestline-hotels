import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGuestlineApi } from '../../../lib/guestline/useGuestlineApi';
import { HotelCard } from '../../../components/atomic/organisms/Card/HotelCard';
import { Stack } from '../../../components/atomic/organisms/Layout/Stack';
import { SearchBar } from '../../../components/atomic/organisms/SearchBar/SearchBar';

export const ListView = () => {
  const api = useGuestlineApi();
  const hotelsQuery = useQuery(['/hotels'], () => api['/hotels'].get({ queryParams: { 'collection-id': 'OBMNG' } }), {
    initialData: [],
  });

  return (
    <Stack flexDirection="column" gap={24}>
      <SearchBar onChange={(filter) => {

      }} />
      <Stack flexDirection="column" alignItems="center" gap={24}>
        {hotelsQuery.data.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </Stack>
    </Stack>
  );
};
