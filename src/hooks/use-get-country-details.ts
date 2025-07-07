import { gql, useQuery } from "@apollo/client";
import { Country, ID } from "app/types";

const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      languages {
        name
        native
      }
      states {
        name
      }
    }
  }
`;

export const useGetCountryDetails = (code: string) => {
  const { data, loading, error } = useQuery<Country, { code: ID }>(
    GET_COUNTRY_DETAILS,
    {
      variables: { code },
      skip: !code, // avoid calling when code is empty
    }
  );

  return { data, loading, error };
};
