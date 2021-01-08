import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import withOutsideClick from "hocs/withClickOutside";

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

  useEffect(() => {
    setUserInput(value);
  }, [value]);

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

  const handleClickOutside = () => {
    setUserInput(value);
    setShowOptions(false);
  };

  const renderOptions = () => {
    if (!showOptions) {
      return null;
    }

    if (!filteredOptions.length) {
      return <p>No results</p>;
    }

    return (
      <div className={styles.autocompleteResult}>
        <ul className={styles.optionsList}>
          {filteredOptions.map((option, index) => {
            const key = `${option}_${index}`;
            return (
              <li key={key} className={styles.option}>
                <button
                  type="button"
                  className={styles.optionButton}
                  onClick={handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderAutocomplete = () => (
    <>
      <input
        type="text"
        className={styles.autocomplete}
        value={userInput}
        onChange={handleUserInputChange}
        onFocus={handleUserInputFocus}
      />

      {renderOptions()}
    </>
  );

  const WrapperComponent = withOutsideClick(renderAutocomplete);

  return (
    <WrapperComponent onClickOutside={handleClickOutside}>
      <input
        type="text"
        className={styles.autocomplete}
        value={userInput}
        onChange={handleUserInputChange}
        onFocus={handleUserInputFocus}
      />

      {renderOptions()}
    </WrapperComponent>
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
