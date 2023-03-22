import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ input }) => (
  <div className="screen">{input}</div>
);
Screen.propTypes = {
  input: PropTypes.node.isRequired,

};

export default Screen;
