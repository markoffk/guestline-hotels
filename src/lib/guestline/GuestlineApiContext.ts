import { createContext } from 'react';
import { createGuestlineApi } from './createGuestlineApi';

export const GuestlineApiContext = createContext<ReturnType<typeof createGuestlineApi>>(createGuestlineApi());
