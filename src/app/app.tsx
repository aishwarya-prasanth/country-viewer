import { ContinentCard } from "components/continent-card";
import { CountryProvider } from "./context/country-context";

function App() {
  return (
    <CountryProvider>
      <main className="bg-blue-2 w-screen h-screen p-6">
        <span className="font-bold text-3xl text-center">
          <h1>Continents</h1>
        </span>
        <ContinentCard />
        {/* show country details popup */}
      </main>
    </CountryProvider>
  );
}

export default App;
