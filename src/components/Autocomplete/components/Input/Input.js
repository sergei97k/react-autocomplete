import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./Input.module.scss";

const Input = ({ type, className, value, onChange, onFocus }) => {
  const handleChange = ({ target }) => onChange(target.value);

  return (
    <input
      type={type}
      className={cx(styles.input, className)}
      value={value}
      onChange={handleChange}
      onFocus={onFocus}
    />
  );
};

Input.defaultProps = {
  type: "text",
  className: null,
  onFocus: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
};

export default Input;
