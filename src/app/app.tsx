import { ContinentCard } from "components/continent-card";
import { useGetContinents } from "hooks/use-get-continents";

function App() {
  const { data: continentList, loading: isLoadingContinents } =
    useGetContinents();

  if (isLoadingContinents) {
    return <>Loading...</>;
  }

  return (
    <main className="bg-blue-2 w-full h-screen">
      <span className="font-bold text-3xl text-center">
        <h1>Continents</h1>
      </span>
      <div className="space-y-5 p-6 overflow-x-hidden">
        {continentList?.continents?.map((item) => {
          return (
            <ContinentCard
              key={item.code}
              name={item.name}
              continentCode={item.code}
            />
          );
        })}
      </div>
      {/* show country details popup */}
    </main>
  );
}

export default App;
