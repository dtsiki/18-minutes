import { StoreonModule } from 'storeon';
import { nanoid } from 'nanoid'

import { IThing, ITask } from '../interfaces';
import { icons }  from './../constants';
import { ThingColor } from '../components/planner/Thing/Thing';

const initialThings: Array<IThing> = [
  {
    id: '1',
    title: 'Work',
    icon: icons.work,
    color: ThingColor.DARK_VIOLET
  },
  {
    id: nanoid(),
    title: 'Family',
    icon: icons.family,
    color: ThingColor.BLACK
  },
  {
    id: nanoid(),
    title: 'Self development',
    icon: icons.education,
    color: ThingColor.WHITE
  },
  {
    id: nanoid(),
    title: 'Health',
    icon: icons.heart,
    color: ThingColor.LAVANDER
  },
  {
    id: nanoid(),
    title: 'Doggy',
    icon: icons.dog
  }
];

const initialTasks: Array<ITask> = [
  {
    id: nanoid(),
    thingID: '1',
    title: 'Write a post about semantic HTML',
    isCompleted: true
  },
  {
    id: nanoid(),
    thingID: '1',
    title: 'Refactor code',
    isCompleted: false
  },
  {
    id: nanoid(),
    thingID: '1',
    title: 'Commit something',
    isCompleted: false
  },
  {
    id: nanoid(),
    thingID: '1',
    title: 'Read JavaScript book',
    isCompleted: false
  },
  {
    id: nanoid(),
    thingID: '1',
    title: 'Learn TypeScript',
    isCompleted: false
  }
];

export interface State {
  things: Array<IThing>,
  tasks: Array<ITask>
}

export interface Events {
  'addThing': IThing
}

export enum ManagerEvent {
  ADD_THING = 'addThing'
}

export const planner: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    things: initialThings,
    tasks: initialTasks
  }));
};
