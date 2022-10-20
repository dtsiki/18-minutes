import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useStoreon } from 'storeon/react';

import { ITask, IThing } from '../../../interfaces';
import Input from '../../common/Input';
import Select from '../../common/Select';

import './style.scss';

interface Props {
  task?: ITask;
  thing: IThing;
  handleClose: () => void;
  handleSave: (task: ITask) => void;
}

const TaskForm: React.FC<Props> = ({ task, thing, handleClose, handleSave }) => {
  const { things } = useStoreon('things');

  const [localTask, setLocalTask] = useState<ITask>({
    id: task ? task.id : nanoid(),
    title: task ? task.title : '',
    thingID: thing.id,
    isCompleted: task ? task.isCompleted : false
  });

  const changeTitle = (value: string): void => {
    setLocalTask((prevLocalTask) => ({
      ...prevLocalTask,
      title: value
    }));
  }

  const saveTask = (): void => {
    if (localTask.title.length && localTask.thingID) {
      handleSave(localTask);
    }
  }

  const changeThing = (value: string): void => {
    setLocalTask((prevLocalTask) => ({
      ...prevLocalTask,
      thingID: value
    }));
  }

  return (
    <div className='thing-form'>
      <div className='field'>
        <Input
          placeholder='Enter task title'
          label='Title (required)'
          value={localTask.title}
          onChange={changeTitle}
          labelClassName='heading-l4' />
      </div>
      <div className='field'>
        <Select
          placeholder='Select associated thing'
          name='taskThing'
          label='Thing'
          options={things}
          selectedOption={thing}
          handleSelect={changeThing} />
      </div>
      <div className='thing__controls'>
        <button
          className='button button--light'
          onClick={handleClose}>
          Cancel
        </button>
        <button
          className='button button--primary'
          onClick={saveTask}
          disabled={!localTask.title.length && !localTask.thingID}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
