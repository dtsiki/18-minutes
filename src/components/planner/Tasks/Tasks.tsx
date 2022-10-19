import React, { useMemo } from 'react';
import { IThing } from '../../../interfaces';

import { ITask } from '../../../interfaces/ITask';

import './style.scss';

interface Props {
  tasks: Array<ITask>;
  thing: IThing;
}

const Tasks: React.FC<Props> = ({ tasks, thing }: Props) => {
  const renderTasks = useMemo(() => {
    if (tasks.length) {
      return tasks.map((task) => {
        return (
          <li
            key={task.id}
            className='tasks__item'>
            {task.title}
          </li>
        );
      });
    }

    return (
      <li
        key='empty-list'
        className='tasks__notification'>
        No tasks yet
      </li>
    );
  }, [tasks]);

  return (
    <ul className={`tasks${thing.color ? ` ${thing.color}` : ''}`}>
      {renderTasks}
    </ul>
  );
};

export default Tasks;
