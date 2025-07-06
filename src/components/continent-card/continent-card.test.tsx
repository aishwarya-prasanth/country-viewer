import { render, screen, fireEvent } from "@testing-library/react";
import { ContinentCard } from "./continent-card";

vi.mock("components/country-card-list/country-card-list", () => ({
  CountryCardList: vi.fn(() => (
    <div data-testid="country-list">Mocked CountryCardList</div>
  )),
}));

describe("ContinentCard", () => {
  const props = {
    name: "Asia",
    continentCode: "AS",
  };

  it("renders the continent name", () => {
    render(<ContinentCard {...props} />);
    expect(screen.getByText("Asia")).toBeInTheDocument();
  });

  it("shows chevron-down icon initially", () => {
    render(<ContinentCard {...props} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "src\\app\\assets\\chevron-down.png");
  });

  it("toggles chevron icon and reveals country list on click", () => {
    render(<ContinentCard {...props} />);
    const button = screen.getByRole("button");

    // Click to open
    fireEvent.click(button);

    // Now chevron-up should be visible
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "src\\app\\assets\\chevron-up.png");

    // Country list should now appear
    expect(screen.getByTestId("country-list")).toBeInTheDocument();

    // Click again to close
    fireEvent.click(button);
    expect(screen.queryByTestId("country-list")).not.toBeInTheDocument();
  });
});
