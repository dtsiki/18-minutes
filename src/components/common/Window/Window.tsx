import React, { ReactNode, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { ThingColor } from '../../planner/Thing/Thing';

import './style.scss';

interface Props {
  children?: ReactNode;
  title?: string;
  closeWindow?: () => void;
  show?: boolean;
  variant?: ThingColor;
  icon?: IconDefinition;
}

const Window: React.FC<Props> = ({ children, title = '', closeWindow, show, variant, icon }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickedOutside = (): void => {
    if (closeWindow) {
      closeWindow();
    }
  }

  useOnClickOutside(ref, () => onClickedOutside());

  return (
    <div
      ref={ref}
      className={`window ${variant ? ` ${variant}` : ''}${show ? ' opened' : ' closed'}`}>
      {closeWindow && (
        <button
          onClick={closeWindow}
          className='window__close-button'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      <div className='window__header'>
        <div className='window__title'>
          {title}
        </div>
      </div>
      <div className='window__body'>
        {children}
      </div>
      {icon && (
        <div className='window__overlay'>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </div>
  );
};

export default Window;
