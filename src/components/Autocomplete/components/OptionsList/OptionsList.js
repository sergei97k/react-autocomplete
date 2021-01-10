import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./OptionsList.module.scss";

const OptionsList = ({
  options,
  handleOptionClick,
  renderOption,
  className,
}) => (
  <div className={cx(styles.optionsWrapper, className)}>
    <ul className={styles.optionsList} tabIndex={-1} role="listbox">
      {options.map((option, index) => {
        const key = `${option}_${index}`;
        return (
          <li key={key} className={styles.option}>
            <button
              type="button"
              className={styles.optionButton}
              onClick={handleOptionClick(option)}
              tabIndex={0}
            >
              {renderOption(option)}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

OptionsList.defaultProps = {
  className: null,
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleOptionClick: PropTypes.func.isRequired,
  renderOption: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default OptionsList;
