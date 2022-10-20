import React from 'react';
import { ThingColor } from '../../planner/Thing/Thing';

import './style.scss';

interface Props {
  label: string;
  value: boolean;
  handleValue: () => void;
  variant?: ThingColor;
}

const Checkbox:React.FC<Props> = ({ label, value, handleValue, variant = ThingColor.VIOLET } : Props) => {
  return (
    <div className={`checkbox ${variant}`}>
      <label>
        <input
          className='checkbox__input'
          type='checkbox'
          checked={value}
          onChange={handleValue} />
        <span className='checkbox__label'>
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
