import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";

const SIMPLE_DB = ["fillLine", "fillCircle", "fillCircleMore"];
const CUSTOM_DB = [
  { name: "ETH", balance: 220 },
  { name: "ETC", balance: 100 },
];

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Autocomplete {...args} value={value} onChange={setValue} />;
};

export const Simple = Template.bind({});
Simple.args = {
  value: "",
  options: SIMPLE_DB,
};

export const Custom = Template.bind({});
Custom.args = {
  value: "",
  options: CUSTOM_DB.map(({ name }) => name),
  renderOption: (value) => (
    <b>
      <em>{value}</em>
    </b>
  ),
};

export const CustomWithText = Template.bind({});
CustomWithText.args = {
  value: "",
  options: CUSTOM_DB.map(({ name }) => name),
  renderOption: (value) => {
    const { balance } = CUSTOM_DB.find(({ name }) => name === value);
    return (
      <>
        <b>{value}</b>(balance: {balance})
      </>
    );
  },
};
