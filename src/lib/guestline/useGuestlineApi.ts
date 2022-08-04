import { useContext } from 'react';
import { GuestlineApiContext } from './GuestlineApiContext';

export function useGuestlineApi() {
  return useContext(GuestlineApiContext);
}
