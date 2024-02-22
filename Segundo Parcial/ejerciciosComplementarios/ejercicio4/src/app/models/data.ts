export interface heroes {
  squadName: string;
  homeTown: string;
  formed: number;
  secretBase: string;
  active: true;
  members: [
    {
      name: string;
      age: number;
      secretIdentity: string;
      powers: string[];
    }
  ];
}
