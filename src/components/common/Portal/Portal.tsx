import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

interface Props {
  children: ReactNode;
}

const Portal: React.FC<Props> = ({ children }: Props) => {
  const [container] = useState<any>(document.createElement('div'));

  container.classList.add('portal');

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
}

export default Portal;
