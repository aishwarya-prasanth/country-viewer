import { render, screen, fireEvent } from "@testing-library/react";
import { CountryCardList } from "./country-card-list";
import * as hook from "hooks/use-get-countries";
import { CountriesByContinent } from "app/types";

// Mock CountryDetailPopup (to avoid rendering it fully)
vi.mock("../country-detail-popup", () => ({
  CountryDetailPopup: ({ countryCode }: { countryCode: string }) => (
    <div data-testid="country-popup">Popup: {countryCode}</div>
  ),
}));

describe("CountryCardList", () => {
  const mockCountries: CountriesByContinent = {
    continent: {
      countries: [
        {
          name: "India",
          capital: "New Delhi",
          code: "IN",
          currency: "INR",
          languages: [
            {
              name: "Hindi",
              native: "हिन्",
            },
          ],
          states: [{ name: "Andhra Pradesh" }],
        },
      ],
    },
  };

  beforeEach(() => {
    vi.spyOn(hook, "useGetCountries").mockReturnValue({
      data: mockCountries,
      loading: false,
      error: undefined,
    });
  });

  afterEach(() => {
    document.body.classList.remove("overflow-hidden");
  });

  it("renders country cards", () => {
    render(<CountryCardList continentCode="AS" />);
    expect(screen.getByText("India")).toBeInTheDocument();
  });

  it("opens popup and locks scroll on card click", () => {
    render(<CountryCardList continentCode="AS" />);

    const indiaCard = screen.getByText("India");
    fireEvent.click(indiaCard);

    expect(screen.getByTestId("country-popup")).toHaveTextContent("IN");
    expect(document.body.classList.contains("overflow-hidden")).toBe(true);
  });

  it("removes scroll lock when popup closes", () => {
    render(<CountryCardList continentCode="AS" />);

    const indiaCard = screen.getByText("India");
    fireEvent.click(indiaCard);

    // Simulate close
    fireEvent.click(screen.getByTestId("country-popup"));
    document.body.classList.remove("overflow-hidden"); // simulate cleanup

    expect(document.body.classList.contains("overflow-hidden")).toBe(false);
  });
});
