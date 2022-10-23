import React, { useMemo, useState } from 'react';
import { useStoreon } from 'storeon/react';

import { ITask, IThing } from '../../../interfaces';
import Task from '../../planner/Task';

import './style.scss';

const Tasks: React.FC = () => {
  const { tasks, things } = useStoreon('tasks', 'things');
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);
  const [activeThing, setActiveThing] = useState<IThing | null>(null);

  const renderTasks = useMemo(() => {
    const items = hideCompleted ? tasks.filter((task: ITask) => !task.isCompleted) : tasks;
    const filteredItems = activeThing ? items.filter((task: ITask) => task.thingID === activeThing.id) : items;

    if (filteredItems.length) {
      return filteredItems.map((task: ITask) => {
        const thing = things.find((thing: IThing) => thing.id === task.thingID);

        return (
          <li
            key={task.id}
            className='tasks-area__item'>
            <Task
              task={task}
              thing={thing}
              showBackground />
          </li>
        );
      });
    }

    return (
      <li className='tasks-area__item tasks-area__message'>
        No tasks yet
      </li>
    );
  }, [tasks, hideCompleted, activeThing]);

  const renderTabs = useMemo(() => {
    return things.map((thing: IThing) => {
      return (
        <li
          key={thing.id}
          className='tabs-header__item'>
          <button
            className={`tabs-header__button ${thing.color || 'violet'}${activeThing?.id === thing.id ? ' active' : ''}`}
            onClick={() => setActiveThing(thing)}>
            {thing.title}
          </button>
        </li>
      )
    })
  }, [things, activeThing]);

  return (
    <div className='tasks-area'>
      <div className='tasks-area__header spacer bottom medium'>
        <h1 className='heading-l3'>Tasks</h1>
        <div className='tasks-area__filters'>
          <button
            className={`filter${hideCompleted ? ' active' : ''}`}
            onClick={() => setHideCompleted(!hideCompleted)}>
            Hide completed
          </button>
        </div>
      </div>
      <ul className='tabs-header tasks-area__tabs'>
        <li className='tabs-header__item'>
          <button
            className={`tabs-header__button ${activeThing === null ? ' active' : ''}`}
            onClick={() => setActiveThing(null)}>
            All
          </button>
        </li>
        {renderTabs}
      </ul>
      <ul className='tasks-area__list'>
        {renderTasks}
      </ul>
    </div>
  );
};

export default Tasks;
