import React, { useMemo } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';

import { icons } from '../../../constants';

import './style.scss';

interface Props {
  selectedIcon?: IconDefinition;
  handleIcon: (icon: IconDefinition) => void;
}

const IconPicker: React.FC<Props> = ({ selectedIcon, handleIcon }: Props) => {
  const renderThingIcons = useMemo(() => {
    return Object.values(icons)
      .map((icon) => {
        return (
          <li
            key={nanoid()}
            className='icon-picker__item'>
            <button
              className={`icon-picker__button${selectedIcon?.iconName == icon.iconName ? ' selected' : ''}`}
              onClick={() => handleIcon(icon)}>
              <FontAwesomeIcon icon={icon} />
              <span className='visually-hidden'>
                Select icon {icon.iconName}
              </span>
            </button>
          </li>
        );
      })
  }, [icons, selectedIcon]);

  return (
    <ul className='icon-picker'>
      {renderThingIcons}
    </ul>
  );
};

export default IconPicker;
