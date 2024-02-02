import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BasicPagination from "./basicPagination";

const mockOnBack = jest.fn();
const mockOnNext = jest.fn();

describe("Basic Pagination Testing", () => {
  it("should render Basic Pagination Component", () => {
    const component = (
      <BasicPagination onBack={mockOnBack} onNext={mockOnNext} />
    );
    render(component);
    expect(component).toMatchSnapshot();
  });

  it("should call a callback when Back and Next buttons is pressed.", () => {
    render(<BasicPagination onBack={mockOnBack} onNext={mockOnNext} />);
    const backButton = screen.getByText(/Back/, { exact: true });
    const nextButton = screen.getByText(/Next/, { exact: true });

    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(mockOnBack).toHaveBeenCalledTimes(1);

    expect(nextButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(mockOnNext).toHaveBeenCalledTimes(1);
  });
});
