import React, { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';
import './Styles/ButtonBox.css';

const ButtonBox = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnInput = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  const calcOperation = (buttonName) => {
    const result = calculate(state, buttonName);
    setState(result);
  };

  return (

    <div className="display">
      <Screen input={state.next || state.total || '0'} />
      { btnInput.map((btn) => (

        <Button key={btn} value={btn} handleClick={calcOperation} />
      ))}

    </div>
  );
};
export default ButtonBox;
