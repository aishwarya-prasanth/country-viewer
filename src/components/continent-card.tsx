import { useState } from "react";
import { CountryCardList } from "./country-card-list";

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
      >
        <div className="text-2xl fomt-semibold flex justify-between items-center">
          <span>{name}</span>
          <span>
            {!isCardOpen ? (
              <>
                <img
                  src="src\app\assets\chevron-down.png"
                  height={14}
                  width={14}
                />
              </>
            ) : (
              <img src="src\app\assets\chevron-up.png" height={14} width={14} />
            )}
          </span>
        </div>
      </button>
      {isCardOpen && (
        <div className="md:max-h-96 flex sm:max-h-[500px] overflow-y-auto border-b border-x border-grey-1 w-full justify-center">
          <CountryCardList continentCode={continentCode} />
        </div>
      )}
    </div>
  );
};
