import { useContext } from "react";
import { CountryCard } from "./country-card";
import { CountryContext } from "app/context/country-context";

const data = [
  {
    name: "Angola",
    code: "AO",
    capital: "Luanda",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    capital: "Ouagadougou",
  },
  {
    name: "Ivory Coast",
    code: "CI",
    capital: "Yamoussoukro",
  },
];

export const CountryCardList = () => {
  const { setViewCountry } = useContext(CountryContext);

  const onCardClick = (countryCode: string) => {
    setViewCountry(countryCode);
  };
  return (
    <>
      {data?.map((item) => (
        <CountryCard
          name={item.name}
          capital={item.capital}
          code={item.code}
          key={item.code}
          onCardClick={() => onCardClick(item.code)}
        />
      ))}
    </>
  );
};
