type Props = {
  name: string;
  code: string;
  capital: string;
  onCardClick: () => void;
};

export const CountryCard = ({ name, code, capital, onCardClick }: Props) => {
  return (
    <button
      className="bg-blue-2 w-[250px] rounded-lg p-2 border border-grey-1 hover:bg-blue-4 shadow-md transform transition hover:scale-105"
      onClick={onCardClick}
    >
      <div className="flex justify-between w-full items-center">
        <div className="text-lg font-medium text-blue-3">{name}</div>
        <div className="bg-blue-4 rounded-xl text-sm px-2 items-center border border-blue-5 text-blue-5 font-semibold ">
          {code}
        </div>
      </div>
      <span className="text-grey-2 text-base flex space-x-3 items-center">
        <img src="src\app\assets\capital.png" width={"15px"} height={"15pxś"} />
        {capital}
      </span>
    </button>
  );
};
