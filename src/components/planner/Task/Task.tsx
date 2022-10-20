import React from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStoreon } from 'storeon/react';

import { ITask } from '../../../interfaces/ITask';
import { PlannerEvent } from '../../../store/planner';
import Checkbox from '../../common/Checkbox';
import { IThing } from '../../../interfaces';
import { ThingColor } from '../Thing/Thing';

import './style.scss';

interface Props {
  task: ITask;
  thing?: IThing;
  showPreview?: boolean;
}

const Task: React.FC<Props> = ({ task, thing, showPreview = false }: Props) => {
  const { dispatch } = useStoreon();

  const toggleStatus = (): void => {
    const updatedTask: ITask = {
      ...task,
      isCompleted: !task.isCompleted
    };

    dispatch(PlannerEvent.UPDATE_TASK, updatedTask);
  }

  const deleteTask = (): void => {
    dispatch(PlannerEvent.DELETE_TASK, task);
  }

  return (
    <>
      {showPreview ? (
        <div className={`task${task.isCompleted ? ' completed' : ''}`}>
          {task.title}
        </div>
      ) : (
        <div className='task'>
          <div className='task__wrapper'>
            <Checkbox
              value={task.isCompleted}
              handleValue={toggleStatus}
              label={task.title}
              variant={thing ? thing.color : ThingColor.VIOLET}
            />
            <div className='task__actions'>
              <button
                className='task__action'
                onClick={deleteTask}>
                <FontAwesomeIcon icon={faTrash} />
                <span className='visually-hidden'>Delete task</span>
              </button>
              <button className='task__action'>
                <FontAwesomeIcon icon={faPen} />
                <span className='visually-hidden'>Edit task</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Task;
