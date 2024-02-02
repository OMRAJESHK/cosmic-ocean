/* eslint-disable testing-library/no-node-access */
import React from "react";
import { screen, render, prettyDOM } from "@testing-library/react";
import Flexbox from "./flexbox";

const MockItems = () => (
  <>
    <div>1</div>
    <div>2</div>
  </>
);
describe("FlexBox Testing", () => {
  it("should render Basic Pagination Component", () => {
    const component = (
      <Flexbox justifyContent="center" alignItems="center" gap={5}>
        <MockItems />
      </Flexbox>
    );
    render(component);
    expect(component).toMatchSnapshot();
  });

  it("should render element with className flex and justifyContent,alignItems to be center with gap 5px", () => {
    const component = (
      <Flexbox justifyContent="center" alignItems="center" gap={5}>
        <MockItems />
      </Flexbox>
    );
    const { container } = render(component);
    // eslint-disable-next-line testing-library/no-debugging-utils
    console.log(prettyDOM(container));
    const flexElement = screen.getByTestId("flex-box");
    expect(flexElement).toHaveStyle("justify-content: center");
    expect(flexElement).toHaveStyle("align-items: center");
    expect(flexElement).toHaveStyle("gap: 5px");
    expect((container?.firstChild.className).trim()).toStrictEqual("flex");
  });
  it("should render title for the flexbox", () => {
    const component = (
      <Flexbox title="This is the title of the Flexbox">
        <MockItems />
      </Flexbox>
    );
    const { container } = render(component);
    expect(container?.firstChild.title).toBe(
      "This is the title of the Flexbox",
    );
  });

  it("should render default styles to flexbox", () => {
    const component = (
      <Flexbox>
        <MockItems />
      </Flexbox>
    );
    render(component);
    const flexElement = screen.getByTestId("flex-box");
    expect(flexElement).toHaveStyle("align-items: flex-start");
    expect(flexElement).toHaveStyle("flex-direction: row");
    expect(flexElement).toHaveStyle("justify-content: flex-start");
  });

  it("should render in FlexBox with classProp and styleProp", () => {
    const component = (
      <Flexbox classProp="styledFlexbox" styleProp={{ backgroundColor: "red" }}>
        <MockItems />
      </Flexbox>
    );
    const { container } = render(component);
    expect(container?.firstChild.className).toStrictEqual("flex styledFlexbox");

    const flexElement = screen.getByTestId("flex-box");
    expect(flexElement).toHaveStyle("background-color: red");
  });
});
