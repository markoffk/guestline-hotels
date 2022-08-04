import axios from 'axios';
import { GuestlineApi } from './types/api';

const guestlineAxios = axios.create({
  baseURL: process.env.REACT_APP_GUESTLINE_API_URL,
});

export const createGuestlineApi = () => {
  return {
    '/hotels': {
      get: <TEndpoint extends '/hotels'>(req: GuestlineApi[TEndpoint]['get']['req']) =>
        guestlineAxios
          .get(`/hotels?${new URLSearchParams(req.queryParams)}`)
          .then<GuestlineApi[TEndpoint]['get']['res']['body']>((res) => res.data),
    },
    '/roomRates/:collectionId/:hotelId': {
      get: <TEndpoint extends '/roomRates/:collectionId/:hotelId'>(req: GuestlineApi[TEndpoint]['get']['req']) =>
        guestlineAxios
          .get(`/roomRates/${req.params.collectionId}/${req.params.hotelId}`)
          .then<GuestlineApi[TEndpoint]['get']['res']['body']>((res) => res.data),
    },
  };
};
