import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { IThing } from '../../../interfaces';
import Input from '../../common/Input';
import ColorPicker from '../ColorPicker';
import IconPicker from '../IconPicker';
import { ThingColor } from '../Thing/Thing';

import './style.scss';

interface Props {
  thing: IThing;
  handleClose: () => void;
  handleSave: (thing: IThing) => void;
}

const Form: React.FC<Props> = ({ thing, handleClose, handleSave }) => {
  const [localThing, setLocalThing] = useState<IThing>({
    id: thing.id,
    title: thing.title,
    icon: thing.icon,
    color: thing.color
  });

  const changeTitle = (value: string): void => {
    setLocalThing((prevLocalThing) => ({
      ...prevLocalThing,
      title: value
    }));
  }

  const changeIcon = (icon: IconDefinition): void => {
    const isSameIcon = icon.iconName === localThing.icon?.iconName;

    setLocalThing((prevLocalThing) => ({
      ...prevLocalThing,
      icon: isSameIcon ? undefined : icon
    }));
  }

  const changeColor = (color: ThingColor): void => {
    const isSameColor = color === localThing.color;

    setLocalThing((prevLocalThing) => ({
      ...prevLocalThing,
      color: isSameColor ? undefined : color
    }));
  }

  const saveThing = (): void => {
    if (localThing.title.length) {
      handleSave(localThing);
    }
  }

  return (
    <div className='form'>
      <div className='field'>
        <Input
          placeholder='Enter thing title'
          label='Title (required)'
          value={localThing.title}
          onChange={changeTitle}
          labelClassName='heading-l4' />
      </div>
      <div className='field'>
        <div className='heading-l4'>Icon</div>
        <IconPicker
          selectedIcon={localThing.icon}
          handleIcon={changeIcon} />
      </div>
      <div className='field'>
        <div className='heading-l4'>Color:</div>
        <ColorPicker
          selectedColor={localThing.color}
          handleColor={changeColor} />
      </div>
      <div className='thing__controls'>
        <button
          className='button button--light'
          onClick={handleClose}>
          Cancel
        </button>
        <button
          className='button button--primary'
          onClick={saveThing}
          disabled={!localThing.title.length}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
