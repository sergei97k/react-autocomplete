import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const portalRoot = document.getElementById("portal-root");

class Portal extends Component {
  el = document.createElement("div");

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
