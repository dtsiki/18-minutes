import React, { ReactNode } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './style.scss';

export enum ProgressBarVariant {
  INLINE = 'inline',
  CIRCULAR = 'circular'
}

interface Props {
  variant?: ReactNode;
  value: number;
}

const ProgressBar: React.FC<Props> = ({ value = 50, variant = ProgressBarVariant.INLINE }: Props) => {
  return (
    <div className={`progress-bar ${variant}${value === 100 ? ' completed' : ''}`}>
      {variant === ProgressBarVariant.CIRCULAR ? (
        <CircularProgressbar
          value={value}
          text={`${value}%`} />
      ) : (
        <>
          <div
            className='progress-bar__tracker'
            style={{ width: `${value}%` }} />
          {value > 0 && (
            <div
              className='progress-bar__value'
              style={{ paddingLeft: `${value}%` }}>
              {value}%
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProgressBar;
