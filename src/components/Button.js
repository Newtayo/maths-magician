import PropTypes from 'prop-types';

const getClassName = (btn) => {
  const className = {
    '=': 'opt',
    '×': 'opt',
    '÷': 'opt',
    '-': 'opt',
    '+': 'opt',
    0: 'zero',

  };
  return className[btn];
};

const Button = ({ value }) => (

  <button type="submit" className={`${getClassName(value)} btn`}>{value}</button>
);
Button.propTypes = {
  value: PropTypes.node.isRequired,

};

export default Button;
