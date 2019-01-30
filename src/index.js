import React from "react";
import PropTypes from "prop-types";

const Error = () => {
  return <div>Component Type not found on Selector</div>;
};

const Requite = props => {
  const ErrorHandler = props.error || Error;
  const Handler = props.list[props.type] || ErrorHandler;
  return <Handler {...props} />;
};

Requite.propTypes = {
  error: PropTypes.element,
  list: PropTypes.object.isRequired,
  type: PropTypes.any.isRequired
};

export default Requite;
