export type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: { code: string }[];
  telephone: string;
  email: string;
  images: {
    url: string;
  }[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    latitude: number;
    longitude: number;
    timezone: string;
  };
};

export type GuestlineApi = {
  '/hotels': {
    get: {
      req: {
        queryParams: {
          'collection-id'?: string;
        };
      };
      res: {
        body: Hotel[];
      };
    };
  };
  '/roomRates/:collectionId/:hotelId': {
    get: {
      req: {
        params: {
          collectionId: string;
          hotelId: string;
        };
      };
      res: {
        body: {
          rooms: any[];
          ratePlans: any[];
        };
      };
    };
  };
};
