import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Screen.css';

const Screen = ({ input }) => (
  <div className="screen">{input}</div>
);
Screen.propTypes = {
  input: PropTypes.node.isRequired,

};

export default Screen;
