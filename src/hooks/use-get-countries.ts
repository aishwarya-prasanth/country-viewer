import { gql, useQuery } from "@apollo/client";
import { CountriesByContinent } from "app/types";

const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountriesByContinent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        capital
      }
    }
  }
`;

export const useGetCountries = (code: string) => {
  const { data, loading, error } = useQuery<CountriesByContinent>(
    GET_COUNTRIES_BY_CONTINENT,
    {
      variables: { code },
      skip: !code, // avoid calling when code is empty
    }
  );

  return { data, loading, error };
};
