import React, { useEffect, useState } from "react";
import Autocomplete from "./Autocomplete";

const SIMPLE_DB = ["fillLine", "fillCircle", "fillCircleMore"];

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
