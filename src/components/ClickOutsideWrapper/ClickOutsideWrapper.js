import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

class ClickOutsideWrapper extends Component {
  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
    document.addEventListener("touchstart", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.removeEventListener("touchstart", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      const { onClickOutside } = this.props;
      onClickOutside(event);
    }
  };

  render() {
    const { children } = this.props;
    return <div ref={this.wrapperRef}>{children}</div>;
  }
}

ClickOutsideWrapper.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ClickOutsideWrapper;
