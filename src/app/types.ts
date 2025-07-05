export type ID = string;

export type State = {
  name: string;
};
export type Language = {
  name: string;
  native: string;
};

export type CountryDetails = {
  name: string;
  capital: string;
  code: string;
  currency: string;
  states: State[];
  languages: Language[];
};

export type Country = {
  country: CountryDetails;
};

export type Continent = {
  name: string;
  code: ID;
};

export type CountriesByContinent = {
  continent: {
    countries: CountryDetails[];
  };
};

export type Continents = {
  continents: Continent[];
};
