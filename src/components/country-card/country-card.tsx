type Props = {
  name: string;
  countryCode: string;
  capital: string;
  onCardClick: () => void;
};

export const CountryCard = ({
  name,
  countryCode,
  capital,
  onCardClick,
}: Props) => {
  return (
    <button
      className="bg-blue-2 w-full h-full rounded-lg p-4 border border-grey-1 hover:bg-blue-4 shadow-md transform transition hover:scale-105 flex flex-col justify-between"
      onClick={onCardClick}
      aria-label={`View details for ${name || "unknown country"}`}
      role="listitem"
    >
      <div className="flex justify-between w-full items-center">
        <div
          className="text-lg font-medium text-blue-3 w-[80%] truncate text-start"
          data-testid="name"
        >
          {name || " - "}
        </div>

        <div
          className="bg-blue-4 rounded-xl text-sm px-2 items-center border border-blue-5 text-blue-5 font-semibold "
          data-testid="countryCode"
        >
          {countryCode || " - "}
        </div>
      </div>
      <span
        className="text-grey-2 text-base flex gap-1 items-center"
        data-testid="capital"
      >
        <img
          src="/capital.png"
          width={"15px"}
          height={"15px"}
          alt="capital icon"
        />
        {capital || " - "}
      </span>
    </button>
  );
};
