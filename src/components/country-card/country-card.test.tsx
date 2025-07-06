/// <reference types="vitest/globals" />
import { render, screen, fireEvent } from "@testing-library/react";
import { CountryCard } from "./country-card";

describe("CountryCard", () => {
  const mockClick = vi.fn();

  const defaultProps = {
    name: "India",
    countryCode: "IN",
    capital: "New Delhi",
    onCardClick: mockClick,
  };

  it("renders name, code, and capital correctly", () => {
    render(<CountryCard {...defaultProps} />);
    expect(screen.getByTestId("name")).toHaveTextContent("India");
    expect(screen.getByTestId("countryCode")).toHaveTextContent("IN");
    expect(screen.getByTestId("capital")).toHaveTextContent("New Delhi");
  });

  it("calls onCardClick when clicked", () => {
    render(<CountryCard {...defaultProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it("shows dash if any value is missing", () => {
    render(
      <CountryCard name="" countryCode="" capital="" onCardClick={mockClick} />
    );

    expect(screen.getByTestId("name")).toHaveTextContent(/^\s*-\s*$/);
    expect(screen.getByTestId("countryCode")).toHaveTextContent(/^\s*-\s*$/);
    expect(screen.getByTestId("capital")).toHaveTextContent(/^\s*-\s*$/);
  });
});
