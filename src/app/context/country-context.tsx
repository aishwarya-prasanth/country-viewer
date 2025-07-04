// FontContext.js
import React, { createContext, useState } from "react";

type CountryContextType = {
  viewCountry: string;
  setViewCountry: React.Dispatch<React.SetStateAction<string>>;
};

export const CountryContext = createContext<CountryContextType>({
  viewCountry: "",
  setViewCountry: () => null,
});

export const CountryProvider = ({ children }) => {
  const [viewCountry, setViewCountry] = useState("");

  return (
    <CountryContext.Provider value={{ viewCountry, setViewCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
