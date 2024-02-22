export interface breedList {
  data: datosRaza[];
}
export interface datosRaza {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface factsList {
  status: {
    verified: true;
    sentCount: number;
  };
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  type: string;
  createdAt: string;
  deleted: false;
  used: false;
}

export interface factList {
  fact: string;
}
