/* eslint-disable jest-dom/prefer-empty */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { screen, render } from "@testing-library/react";
import CustomTableHead from "./customTableHead";
import { closeApproachesColumns } from "@/components/modules/nearEarthObjects/constants";

describe("Custom Table Header Testing", () => {
  it("should render Table Header Component", () => {
    const component = <CustomTableHead columns={closeApproachesColumns} />;
    render(component);
    expect(component).toBeDefined();
  });

  it("should render closeApproachesColumns Table Header", () => {
    const component = <CustomTableHead columns={closeApproachesColumns} />;
    render(component);
    const row = screen.getByRole("row", { name: /Miss Distance/i });
    expect(row).toBeInTheDocument();
  });
  it("should render nothing when columns array is empty", () => {
    const component = <CustomTableHead columns={[]} />;
    render(component);
    const thead = screen.getByTestId("thead");
    expect(thead.firstChild.firstChild).toBeNull();
  });
});
