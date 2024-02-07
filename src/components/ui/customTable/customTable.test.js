import React from "react";
import { screen, render } from "@testing-library/react";
import { closeApproachesColumns } from "@/components/modules/nearEarthObjects/constants";
import CustomTable from "./customTable";

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

describe("Custom Table Testing", () => {
  it("should render Table Component", () => {
    const component = (
      <CustomTable
        columns={closeApproachesColumns}
        rows={rows}
        pagination={false}
      />
    );
    render(component);
    expect(component).toBeDefined();
  });
  it("should render Loader when isLoading is true and no data should be displayed", () => {
    const component = (
      <CustomTable isLoading columns={closeApproachesColumns} />
    );
    render(component);
    const loadingElement = screen.getByTestId("spinning-loader");
    const rowElement = screen.queryByTestId("table-tbody");
    expect(loadingElement).toBeInTheDocument();
    expect(rowElement).not.toBeInTheDocument();
  });

  it("should not render Loader when isLoading is false and there is data", () => {
    const component = (
      <CustomTable
        isLoading={false}
        columns={closeApproachesColumns}
        rows={rows}
      />
    );
    render(component);
    const loadingElement = screen.queryByTestId("spinning-loader");
    const rowElement = screen.getByTestId("table-body");
    expect(rowElement).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();
  });

  it("should render 'No Records Found' when there are no rows and loading is false", () => {
    const component = <CustomTable columns={closeApproachesColumns} />;
    render(component);
    const notFoundElement = screen.getByText("No Records Found");
    const rowElement = screen.queryByTestId("table-body");
    expect(notFoundElement).toBeInTheDocument();
    expect(rowElement).not.toBeInTheDocument();
  });
  it("should not render table Pagination when pagination is false", () => {
    const component = (
      <CustomTable
        columns={closeApproachesColumns}
        rows={rows}
        pagination={false}
      />
    );
    render(component);
    const rowElement = screen.queryByTestId("table-foot");
    expect(rowElement).not.toBeInTheDocument();
  });
  it("should render table Pagination when pagination is true and when there is row data", () => {
    const component = (
      <CustomTable
        columns={closeApproachesColumns}
        rows={rows}
        pagination={true}
      />
    );
    render(component);
    const rowElement = screen.getByTestId("table-foot");
    expect(rowElement).toBeInTheDocument();
  });
});
