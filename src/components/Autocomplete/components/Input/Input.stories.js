import React from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Input {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  value: "",
  onChange: () => {},
};
