export interface resultado {
  results: aleatorio[];
}
export interface aleatorio {
      name: {
        title: string;
        first: string;
        last: string;
      };
      location: {
        street: {
          number: number;
          name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
          latitude: string;
          longitude: string;
        };
        timezone: {
          offset: string;
          description: string;
        };
      };
      email: string;
      picture: {
        large: string;
        medium: string;
        thumbnail: string;
      };
}
