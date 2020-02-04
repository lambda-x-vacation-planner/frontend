interface IMyObject {
  index: number;
  lat: number;
  lon: number;
  country: string;
  capital: string;
  picture: string;
}

export const locations: IMyObject[] = [
  {
    index: 1,
    lat: 39.381266,
    lon: -97.922211,
    country: 'United States Of America',
    capital: 'Washington DC',
    picture:
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 2,
    lat: -35.376184,
    lon: -63.998128,
    country: 'Argentina',
    capital: 'Buenas Aires',
    picture:
      'https://images.unsplash.com/photo-1545889238-7db7056fb932?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    index: 3,
    lat: -25.734968,
    lon: 134.489563,
    country: 'Australia',
    capital: 'Canberra',
    picture:
      'https://images.unsplash.com/photo-1524293581917-878a6d017c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 4,
    lat: 27.415415,
    lon: 90.429434,
    country: 'Bhutan',
    capital: 'Thimpu',
    picture:
      'https://images.unsplash.com/photo-1542828810-3372a0020f50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 5,
    lat: 55.585901,
    lon: -105.750596,
    country: 'Canada',
    capital: 'Ottawa',
    picture:
      'https://images.unsplash.com/photo-1533417457911-4ec911485388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 6,
    lat: 26.494184,
    lon: 29.871903,
    country: 'Egypt',
    capital: 'Cairo',
    picture:
      'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 7,
    lat: 47.824905,
    lon: 2.618787,
    country: 'France',
    capital: 'Paris',
    picture:
      'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 8,
    lat: 28.186385,
    lon: 67.695237,
    country: 'Russia',
    capital: 'Moscow',
    picture:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 9,
    lat: 41.294856,
    lon: -4.055685,
    country: 'Spain',
    capital: 'Madrid',
    picture:
      'https://images.unsplash.com/photo-1476786516785-c3ff2dac9bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    index: 10,
    lat: 35.486703,
    lon: 101.901875,
    country: 'China',
    capital: 'Beijing',
    picture:
      'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
] as any;
