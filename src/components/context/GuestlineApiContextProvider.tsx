import React, { useMemo } from 'react';
import { GuestlineApiContext } from '../../lib/guestline/GuestlineApiContext';
import { createGuestlineApi } from '../../lib/guestline/createGuestlineApi';

export const GuestlineApiContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const api = useMemo(() => createGuestlineApi(), []);

  return <GuestlineApiContext.Provider value={api}>{children}</GuestlineApiContext.Provider>;
};
