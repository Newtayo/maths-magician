import React from 'react';
import Button from './Button';

const ButtonBox = () => {
  const btnInput = [{ id: 1, btnValue: 'AC' }, { id: 2, btnValue: '+/-' }, { id: 3, btnValue: '%' }, { id: 3, btnValue: '÷' }, { id: 4, btnValue: '7' }, { id: 5, btnValue: '8' }, { id: 6, btnValue: '9' }, { id: 7, btnValue: '×' }, { id: 8, btnValue: '4' }, { id: 9, btnValue: '5' }, { id: 10, btnValue: '6' }, { id: 11, btnValue: '-' }, { id: 12, btnValue: '1' }, { id: 12, btnValue: '2' }, { id: 13, btnValue: '3' }, { id: 14, btnValue: '+' }, { id: 15, btnValue: 0 }, { id: 16, btnValue: '.' }, { id: 17, btnValue: '=' }];

  return (
    <div className="display">
      { btnInput.map((btn) => {
        const { id, btnValue } = btn;
        return (

          <Button key={id} value={btnValue} />
        );
      })}

    </div>
  );
};
export default ButtonBox;
