import React from "react";
import PropTypes from "prop-types";

import "./Autocomplete.scss";

const Autocomplete = ({ value, options, onChange }) => (
  <div>
    <input value={value} type="text" id="autocomplete" />

    <div id="autocomplete_result">
      {options.map((option, index) => {
        const key = `${option}_${index}`;
        return (
          <p key={key}>
            <button type="button" onClick={onChange}>
              {option}
            </button>
          </p>
        );
      })}
    </div>
  </div>
);

Autocomplete.propTypes = {
  /**
   * Selected item value
   */
  value: PropTypes.string.isRequired,
  /**
   * Array of elements
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Function that is called when an item is selected
   */
  onChange: PropTypes.func.isRequired,
};

export default Autocomplete;
