interface IMyObject {
  index: number;
  lat: number;
  lon: number;
  country: string;
  capital: string;
}

export const locations: IMyObject[] = [
  {
    index: 1,
    lat: 39.381266,
    lon: -97.922211,
    country: 'United States Of America',
    capital: 'Washington DC',
  },
  {
    index: 2,
    lat: -35.376184,
    lon: -63.998128,
    country: 'Argentina',
    capital: 'Buenas Aires',
  },
  {
    index: 3,
    lat: -25.734968,
    lon: 134.489563,
    country: 'Australia',
    capital: 'Canberra',
  },
  {
    index: 4,
    lat: 27.415415,
    lon: 90.429434,
    country: 'Bhutan',
    capital: 'Thimpu',
  },
  {
    index: 5,
    lat: 55.585901,
    lon: -105.750596,
    country: 'Canada',
    capital: 'Ottawa',
  },
  {
    index: 6,
    lat: 26.494184,
    lon: 29.871903,
    country: 'Egypt',
    capital: 'Cairo',
  },
  {
    index: 7,
    lat: 47.824905,
    lon: 2.618787,
    country: 'France',
    capital: 'Paris',
  },
  {
    index: 8,
    lat: 28.186385,
    lon: 67.695237,
    country: 'Russia',
    capital: 'Moscow',
  },
  {
    index: 9,
    lat: 41.294856,
    lon: -4.055685,
    country: 'Spain',
    capital: 'Madrid',
  },
  {
    index: 10,
    lat: 35.486703,
    lon: 101.901875,
    country: 'China',
    capital: 'Beijing',
  },
] as any;
