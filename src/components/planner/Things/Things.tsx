import React from 'react';
import { useMemo } from 'react';
import { useStoreon } from 'storeon/react';
import { IThing } from '../../../interfaces';
import Hero from '../../common/Hero';
import Thing from '../Thing/Thing';

import './style.scss';

interface Props {
  children?: React.ReactNode;
}

const Things: React.FC<Props> = () => {
  const { things } = useStoreon('things');

  const renderThings = useMemo(() => {
    return things.map((thing: IThing) => {
      const { id } = thing;

      return (
        <li
          key={id}
          className='col col--33'>
          <Thing thing={thing} />
        </li>
      )
    })
  }, [things]);

  return (
    <Hero>
      <div className='things'>
        <ul className='row'>
          <li className='col col--33'>
            <Thing />
          </li>
          {renderThings}
        </ul>
      </div>
    </Hero>
  );
};

export default Things;
