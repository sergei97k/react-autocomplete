import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Portal } from "components";
import useClickOutside from "hooks/useClickOutside";

import { filterByExistingWord } from "./helpers";
import { Input } from "./components";

import styles from "./Autocomplete.module.scss";

const Autocomplete = ({ value, options, onChange, renderOption }) => {
  const [userInput, setUserInput] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const wrapperRef = useRef(null);

  const handleClickOutside = () => {
    setUserInput(value);
    setShowOptions(false);
  };

  useClickOutside(wrapperRef, handleClickOutside);

  useEffect(() => {
    const filteredByExistingWord = filterByExistingWord(options, userInput);
    setFilteredOptions(filteredByExistingWord);
  }, [userInput, options]);

  useEffect(() => {
    setUserInput(value);
  }, [value]);

  const handleUserInputFocus = () => {
    setShowOptions(true);
  };

  const handleOptionClick = (chosenOption) => () => {
    onChange(chosenOption);
    setUserInput(chosenOption);
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
                  {renderOption(option)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div ref={wrapperRef} className={styles.autocompleteWrapper}>
      <Input
        className={styles.autocomplete}
        value={userInput}
        onChange={setUserInput}
        onFocus={handleUserInputFocus}
      />

      <Portal>{renderOptions()}</Portal>
    </div>
  );
};

Autocomplete.defaultProps = {
  renderOption: (value) => value,
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
  /**
   * Render custom option view
   */
  renderOption: PropTypes.func,
};

export default Autocomplete;
