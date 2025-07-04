import { CountryCardList } from "./country-card-list";

export const ContinentCard = () => {

    
  return (
    <div className="w-full shadow-md  rounded-b-lg ">
      <div className="bg-blue-1 w-full h-20 items-center p-6 text-blue-2 ">
        <span className="text-2xl fomt-semibold">North America</span>
      </div>
      <div className="max-h-96 overflow-y-auto border-b border-x border-grey-1 bg-gray-50 p-4 flex flex-wrap space-x-4">
        <CountryCardList />
      </div>
    </div>
  );
};
