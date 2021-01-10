import React from "react";
import OptionsList from "./OptionsList";

export default {
  title: "Components/OptionsList",
  component: OptionsList,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <OptionsList {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  options: ["test 1", "test 2"],
  handleOptionClick: () => {},
  renderOption: (value) => value,
};

export const Custom = Template.bind({});
Custom.args = {
  options: ["test 1", "test 2"],
  handleOptionClick: () => {},
  renderOption: (value) => <b>Value: {value}</b>,
};
