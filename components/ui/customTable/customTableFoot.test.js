import React from "react";
import { screen, render } from "@testing-library/react";
import { closeApproachesColumns } from "@/components/modules/nearEarthObjects/constants";
import CustomTableFoot from "./customTableFoot";

const mockOnBack = jest.fn();
const mockOnNext = jest.fn();

describe("Custom Table Footer Testing", () => {
  it("should render Table Footer Component", () => {
    const component = (
      <CustomTableFoot
        columnCount={closeApproachesColumns.length}
        onBack={mockOnBack}
        onNext={mockOnNext}
      />
    );
    render(component);
    expect(component).toBeDefined();
  });

  it("should render Table Footer Component", () => {
    const component = (
      <CustomTableFoot
        columnCount={closeApproachesColumns.length}
        onBack={mockOnBack}
        onNext={mockOnNext}
      />
    );
    render(component);
    expect(component).toBeDefined();
  });

  it("should render Table Footer Component with colspan 3 for closeApproachesColumns", () => {
    const component = (
      <CustomTableFoot
        columnCount={closeApproachesColumns.length}
        onBack={mockOnBack}
        onNext={mockOnNext}
      />
    );
    render(component);
    const footerRowElement = screen.getByTestId("footer-row");
    expect(footerRowElement).toBeInTheDocument();
    expect(footerRowElement).toHaveAttribute("colSpan", "3");
  });
});
