import PropTypes from 'prop-types';

const getClassName = (btn) => {
  const className = {
    '=': 'opt',
    x: 'opt',
    '÷': 'opt',
    '-': 'opt',
    '+': 'opt',
    0: 'zero',

  };
  return className[btn];
};

const Button = ({ value, handleClick }) => (

  <button type="submit" className={`${getClassName(value)} btn`} onClick={() => handleClick(value)}>{value}</button>
);
Button.propTypes = {
  value: PropTypes.node.isRequired,
  handleClick: PropTypes.node.isRequired,

};

export default Button;
