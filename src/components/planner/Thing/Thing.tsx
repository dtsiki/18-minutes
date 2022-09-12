import { faChevronDown, faChevronUp, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useStoreon } from 'storeon/react';

import { IThing } from '../../../interfaces';
import { ITask } from '../../../interfaces/ITask';
import Task from '../Task';

import './style.scss';

export enum ThingColor {
  VIOLET = 'violet',
  DARK_VIOLET = 'dark-violet',
  LAVANDER = 'lavander',
  WHITE = 'white',
  BLACK = 'black',
  GREY = 'grey'
}

interface Props {
  thing?: IThing;
}

const Thing: React.FC<Props> = ({ thing }: Props) => {
  const [showAllTasks, setShowAllTasks] = useState<boolean>(false);
  const { tasks } = useStoreon('tasks');

  const renderThingTasks = useMemo(() => {
    const limit = 4;

    if (thing) {
      const thingsTasks = tasks.filter((task: ITask) => task.thingID === thing.id);

      if (thingsTasks.length) {
        const filteredTasks = thingsTasks.length > limit && !showAllTasks ? thingsTasks.slice(0, limit) : thingsTasks;

        return (
          <>
            <ul className='thing__tasks'>
              {filteredTasks
                .map((task: ITask) => {
                  return (
                    <li
                      key={task.id}
                      className='thing__task'>
                      <Task task={task} />
                    </li>
                  )
                })
              }
            </ul>
            {thingsTasks.length > limit && (
              <button
                onClick={() => setShowAllTasks(!showAllTasks)}
                className='thing__toggle'>
                <FontAwesomeIcon icon={showAllTasks ? faChevronUp : faChevronDown} />
                <span className='visually-hidden'>Show</span>
              </button>
            )}
          </>
        )
      }

      return (
        <div className='thing__note'>
          No tasks
        </div>
      )
    }
  }, [tasks, showAllTasks]);

  return (
    <div className={`thing thing--${thing ? thing.color ? `custom thing--${thing.color}` : 'violet thing--custom' : 'initial'}`}>
      {thing ? (
        <>
          <div className='thing__body'>
            <div className='thing__heading'>
              {thing.icon && (
                <div className='thing__icon'>
                  <FontAwesomeIcon icon={thing.icon} />
                </div>
              )}
              <div className='thing__title'>
                {thing.title}
              </div>
            </div>
            {renderThingTasks}
          </div>
          <div className='thing__footer'>
            <button className='thing__button'>
              <FontAwesomeIcon icon={faPlus} />
              Add task
            </button>
          </div>
        </>
      ) : (
        <button className='thing__button'>
          Add thing
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
    </div>
  );
};

export default Thing;
