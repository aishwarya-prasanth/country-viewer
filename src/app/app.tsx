import { ContinentCard } from "components/continent-card/continent-card";
import { useGetContinents } from "hooks/use-get-continents";

function App() {
  const { data: continentList, loading: isLoadingContinents } =
    useGetContinents();

  if (isLoadingContinents) {
    return (
      <div role="status" aria-live="polite" className="text-center mt-8">
        <span className="sr-only">Loading continents...</span>
        Loading...
      </div>
    );
  }

  return (
    <main className="bg-blue-2 w-full h-screen">
      <header
        className="font-bold text-3xl text-center mt-4 flex space-x-1 justify-center"
        role="banner"
      >
        <h1>Countries of the world</h1>
      </header>
      <h2 className="text-grey-2 text-center mt-2">
        Explore countries organized by continent
      </h2>
      <section
        className="space-y-5 p-6 overflow-x-hidden"
        aria-label="List of continents"
      >
        {continentList?.continents?.length === 0 ? (
          <p className="text-center text-grey-2">No data available</p>
        ) : (
          <>
            {continentList?.continents?.map((item) => (
              <ContinentCard
                key={item.code}
                name={item.name}
                continentCode={item.code}
              />
            ))}
          </>
        )}
      </section>
    </main>
  );
}

export default App;
