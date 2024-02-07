import React from "react";
import { screen, render } from "@testing-library/react";
import { closeApproachesColumns } from "@/components/modules/nearEarthObjects/constants";
import userEvent from "@testing-library/user-event";
import CustomTableBody from "./customTableBody";

const mockOnRowClick = jest.fn();

const rows = [
  {
    id: 1,
    close_approach_date: "1907-10-08",
    close_approach_date_full: "1907-Oct-08 15:17",
    epoch_date_close_approach: -1963903380000,
    near_miss_distance: "0.359 AU",
    orbiting_body: "Earth",
    velocity: "35.342 km/s",
  },
  {
    id: 2,
    close_approach_date: "1915-08-28",
    close_approach_date_full: "1915-Aug-28 21:13",
    epoch_date_close_approach: -1714963620000,
    near_miss_distance: "0.436 AU",
    orbiting_body: "Earth",
    velocity: "13.164 km/s",
  },
];

describe("Custom Table Body Testing", () => {
  it("should render Table Body Component", () => {
    const component = (
      <CustomTableBody
        columns={closeApproachesColumns}
        rows={rows}
        onRowClick={mockOnRowClick}
      />
    );
    render(component);
    expect(component).toBeDefined();
  });
  it("should render rows in the table", () => {
    const component = (
      <CustomTableBody columns={closeApproachesColumns} rows={rows} />
    );
    render(component);

    const cell1 = screen.getByText("1907-Oct-08 15:17", { exact: true });
    const cell2 = screen.getByText("13.164 km/s", { exact: true });
    const cell3 = screen.getByText("0.436 AU", { exact: true });

    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();
    expect(cell3).toBeInTheDocument();
  });

  it("should trigger onRowClick when user Clicks on any row of the table", async () => {
    const component = (
      <CustomTableBody
        columns={closeApproachesColumns}
        rows={rows}
        onRowClick={mockOnRowClick}
      />
    );
    render(component);
    const cell1 = screen.getByText("1907-Oct-08 15:17", { exact: true });
    await userEvent.click(cell1);
    expect(mockOnRowClick).toHaveBeenCalledWith(1);
  });
});
