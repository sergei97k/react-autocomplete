import React from "react";
import Autocomplete from "./Autocomplete";

const SIMPLE_DB = ["fillLine", "fillCircle", "fillCircleMore"];

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Autocomplete {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  value: "",
  options: SIMPLE_DB,
  onChange: () => {},
};
