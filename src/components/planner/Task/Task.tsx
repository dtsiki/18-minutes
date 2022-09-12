import React from 'react';

import { ITask } from '../../../interfaces/ITask';

import './style.scss';

interface Props {
  task: ITask;
}

const Task: React.FC<Props> = ({ task }: Props) => {
  const { title } = task;

  return (
    <div className='task'>
      {title}
    </div>
  );
};

export default Task;
