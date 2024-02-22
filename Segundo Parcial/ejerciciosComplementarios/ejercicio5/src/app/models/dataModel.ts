export interface rick {
  results: datos[];
}
export interface datos {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface episodios {
  results: datos2[];
}
export interface datos2 {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
export interface location {
  results: datos3[];
}
export interface datos3 {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string [];
}
