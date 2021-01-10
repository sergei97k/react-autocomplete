import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import usePortal from "hooks/usePortal";

const Portal = ({ children }) => {
  const container = usePortal();
  return createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
