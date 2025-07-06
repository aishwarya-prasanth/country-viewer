import { CountryCardList } from "components/country-card-list/country-card-list";
import { useState } from "react";

type Props = {
  name: string;
  continentCode: string;
};

export const ContinentCard = ({ name, continentCode }: Props) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const onClickCard = () => {
    setIsCardOpen((prev) => !prev);
  };

  return (
    <div className="w-full shadow-md rounded-b-lg ">
      <button
        className="bg-blue-1 w-full h-20 text-start p-6 text-blue-2"
        onClick={onClickCard}
        aria-expanded={isCardOpen}
        aria-controls={`country-list-${continentCode}`}
      >
        <div className="text-2xl fomt-semibold flex justify-between items-center">
          <span>{name}</span>
          <img
            src={
              isCardOpen
                ? "src\\app\\assets\\chevron-up.png"
                : "src\\app\\assets\\chevron-down.png"
            }
            height={14}
            width={14}
            alt={
              isCardOpen ? "Collapse continent card" : "Expand continent card"
            }
          />
        </div>
      </button>
      {isCardOpen && (
        <div
          className="md:max-h-96 flex sm:max-h-[500px] overflow-y-auto border-b border-x border-grey-1 w-full justify-center"
          id={`country-list-${continentCode}`} // to identify country of which continent
        >
          <CountryCardList continentCode={continentCode} />
        </div>
      )}
    </div>
  );
};
