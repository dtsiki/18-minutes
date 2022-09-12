import React, { ReactNode } from 'react';

import './style.scss';

interface Props {
  children: ReactNode;
}

const Hero: React.FC<Props> = ({ children }: Props) => {

  return (
    <section className='hero'>
      {children}
    </section>
  );
};

export default Hero;
