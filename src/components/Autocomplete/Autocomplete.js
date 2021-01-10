import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Portal } from "components";
import useClickOutside from "hooks/useClickOutside";

import { filterByExistingWord } from "./helpers";
import { Input, OptionsList } from "./components";

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
      return <p className={styles.noResults}>No results</p>;
    }

    return (
      <Portal>
        <OptionsList
          options={filteredOptions}
          handleOptionClick={handleOptionClick}
          renderOption={renderOption}
          className={styles.autocompleteResult}
        />
      </Portal>
    );
  };

  return (
    <div ref={wrapperRef} className={styles.autocompleteWrapper}>
      <Input
        tabIndex={-1}
        className={styles.autocomplete}
        value={userInput}
        onChange={setUserInput}
        onFocus={handleUserInputFocus}
      />

      {renderOptions()}
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
