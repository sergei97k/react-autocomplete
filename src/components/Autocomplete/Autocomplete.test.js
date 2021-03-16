import React from "react";
import { shallow } from "enzyme";

import Autocomplete from "./Autocomplete";

const options = ["fillLine", "fillCircle", "fillCircleMore"];

describe("Autocomplete component tests", () => {
  it("should filter options after enter correct value into input", () => {
    // Arrange
    const value = "fillLine";
    const component = shallow(
      <Autocomplete value="" onChange={jest.fn()} options={options} />
    );
    component.find("Input").simulate("focus");

    // Act
    component.find("Input").simulate("change", value);

    // Assert
    expect(component.find("Input").prop("value")).toBe(value);
    expect(component.find("OptionsList").prop("options").length).toBe(1);
  });

  it('should show "No results" message if value is not exist in options list', () => {
    // Arrange
    const component = shallow(
      <Autocomplete value="" onChange={jest.fn()} options={options} />
    );
    component.find("Input").simulate("focus");

    // Act
    component.find("Input").simulate("change", "1");

    // Assert
    expect(component.find("OptionsList").exists()).toBe(false);
    expect(component.find("p").text()).toBe("No results");
  });
});
