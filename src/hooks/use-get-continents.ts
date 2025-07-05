import { gql, useQuery } from "@apollo/client";
import { Continents } from "app/types";

export const useGetContinents = () => {
  const GET_CONTINENTS = gql`
    query GetContinents {
      continents {
        name
        code
      }
    }
  `;

  const query = useQuery<Continents>(GET_CONTINENTS);

  return { ...query };
};
