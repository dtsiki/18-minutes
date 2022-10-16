import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { ThingColor } from '../Thing/Thing';

import './style.scss';

interface Props {
  selectedColor?: ThingColor;
  handleColor: (color: ThingColor) => void;
}

const ColorPicker: React.FC<Props> = ({ selectedColor, handleColor }: Props) => {
  const renderThingColors = useMemo(() => {
    return Object.values(ThingColor)
      .map((color: ThingColor) => {
        return (
          <li
            key={nanoid()}
            className='color-picker__item'>
            <button
              className={`color-picker__button${selectedColor === color ? ' selected' : ''}`}
              onClick={() => handleColor(color)}>
              <span className='visually-hidden'>
                Select color {color}
              </span>
              <span className={`color-picker__color ${color}`} />
            </button>
          </li>
        );
      })
  }, [ThingColor, selectedColor]);

  return (
    <ul className='color-picker'>
      {renderThingColors}
    </ul>
  );
};

export default ColorPicker;
