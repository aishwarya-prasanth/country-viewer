import { useEffect, useState } from "react";
import { CountryCard } from "./country-card";
import { useGetCountries } from "hooks/use-get-countries";
import { CountryDetailPopup } from "./country-detail-popup";

export const CountryCardList = ({
  continentCode,
}: {
  continentCode: string;
}) => {
  const { data: countryList } = useGetCountries(continentCode);
  const [viewCountryDetails, setViewCountryDetails] = useState("");

  const onCardClick = (countryCode: string) => {
    setViewCountryDetails(countryCode);
  };

  
  // Lock scroll when popup is open
  useEffect(() => {
    if (viewCountryDetails) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }


    return () => document.body.classList.remove("overflow-hidden");
  }, [viewCountryDetails]);


  return (
    <>
      <div className="w-full grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-5">
        {countryList?.continent?.countries?.map((item) => (
          <CountryCard
            name={item.name}
            capital={item.capital}
            countryCode={item.code}
            key={item.code}
            onCardClick={() => onCardClick(item.code)}
          />
        ))}
      </div>
      {viewCountryDetails && (
        <CountryDetailPopup
          countryCode={viewCountryDetails}
          isOpen={!!viewCountryDetails}
          onClose={() => setViewCountryDetails("")}
        />
      )}
    </>
  );
};
