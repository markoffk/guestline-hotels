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

export type HotelRoomRates = {
  rooms: {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    occupancy: {
      maxAdults: number;
      maxChildren: number;
      maxOverall?: number;
    };
    disabledAccess: boolean;
    bedConfiguration: string;
    images: {
      url: string;
      alt: string;
    }[];
    facilities: {
      code: string;
      name: string;
    }[];
  }[];
  ratePlans: {
    id: string;
    shortDescription: string;
    longDescription?: string;
    prePayment: string;
    cancellationPolicy?: {
      name: string;
      text: string;
      penalty: string;
      applicable: string;
      hour: string;
    };
    prePaymentValue?: number;
    prePaymentIsPercentage?: boolean;
  }[];
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
        body: HotelRoomRates;
      };
    };
  };
};
