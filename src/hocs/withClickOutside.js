import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

const withOutsideClick = (WrappedComponent) => {
  class WithOutsideClick extends Component {
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
      return (
        <div ref={this.wrapperRef}>
          <WrappedComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
          />
        </div>
      );
    }
  }

  const componentName = Component.displayName || Component.name || "Component";
  WithOutsideClick.displayName = `clickOutside${componentName}`;

  WithOutsideClick.propTypes = {
    onClickOutside: PropTypes.func.isRequired,
  };

  return WithOutsideClick;
};

export default withOutsideClick;
