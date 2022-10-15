import { nanoid } from 'nanoid';
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
    const plateLimit = 5;
    const items = things.length > plateLimit
      ? things
      : new Array(plateLimit - things.length)
        .fill(null)
        .concat(things)
        .reverse();

    return items.map((thing: IThing | null) => {
      if (thing) {
        return (
          <li
            key={thing.id}
            className='col col--33'>
            <Thing thing={thing} />
          </li>
        );
      } else {
        return (
          <li
            key={nanoid()}
            className='col col--33'>
            <Thing />
          </li>
        );
      }
    });
  }, [things]);

  return (
    <Hero>
      <div className='things'>
        <ul className='row'>
          <li
            key='initial-item'
            className='col col--33'>
            <Thing isInitial />
          </li>
          {renderThings}
        </ul>
      </div>
    </Hero>
  );
};

export default Things;
