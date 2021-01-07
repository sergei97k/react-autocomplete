import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { filterByExistingWord } from "./helpers";

import styles from "./Autocomplete.module.scss";

const Autocomplete = ({ value, options, onChange }) => {
  const [userInput, setUserInput] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const filteredByExistingWord = filterByExistingWord(options, userInput);
    setFilteredOptions(filteredByExistingWord);
  }, [userInput, options]);

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleUserInputFocus = () => {
    setShowOptions(true);
  };

  const handleOptionClick = (chosenOption) => () => {
    onChange(chosenOption);
    setUserInput(chosenOption);
    setShowOptions(false);
  };

  return (
    <div>
      <input
        type="text"
        className={styles.autocomplete}
        value={userInput}
        onChange={handleUserInputChange}
        onFocus={handleUserInputFocus}
      />

      {showOptions && (
        <div className={styles.autocompleteResult}>
          {filteredOptions.map((option, index) => {
            const key = `${option}_${index}`;
            return (
              <p key={key}>
                <button type="button" onClick={handleOptionClick(option)}>
                  {option}
                </button>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

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
