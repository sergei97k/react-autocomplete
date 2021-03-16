import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

describe("Input component tests", () => {
  it("should render input type password", () => {
    const component = shallow(
      <Input value="11" onChange={jest.fn()} type="password" />
    );
    expect(component.prop("type")).toBe("password");
  });

  it("should call change event on Input", () => {
    // Arrange
    const mockChange = jest.fn();
    const component = shallow(<Input value="" onChange={mockChange} />);

    // Act
    component.simulate("change", { target: { value: "22" } });

    // Assert
    expect(mockChange).toHaveBeenCalled();
    expect(mockChange).toHaveBeenCalledWith("22");
  });
});
