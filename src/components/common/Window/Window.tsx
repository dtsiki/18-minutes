import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

interface Props {
  children?: ReactNode;
  title?: string;
  closeWindow?: () => void;
}

const Window: React.FC<Props> = ({ children, title = '', closeWindow }: Props) => {
  return (
    <div className='window'>
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
    </div>
  );
};

export default Window;
