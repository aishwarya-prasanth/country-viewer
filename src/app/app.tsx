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
      <header className="font-bold text-3xl text-center mt-4" role="banner">
        <h1>Continents</h1>
      </header>
      <section
        className="space-y-5 p-6 overflow-x-hidden"
        aria-label="List of continents"
      >
        {continentList?.continents?.map((item) => (
          <ContinentCard
            key={item.code}
            name={item.name}
            continentCode={item.code}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
