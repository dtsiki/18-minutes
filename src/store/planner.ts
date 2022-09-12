import { StoreonModule } from 'storeon';
import { IThing } from '../interfaces';
import { nanoid } from 'nanoid'

const initialThings: Array<IThing> = [
  {
    id: nanoid(),
    title: 'Work'
  },
  {
    id: nanoid(),
    title: 'Family'
  },
  {
    id: nanoid(),
    title: 'Learning English'
  },
  {
    id: nanoid(),
    title: 'Health'
  },
  {
    id: nanoid(),
    title: 'Dog'
  }
];

export interface State {
  things: Array<IThing>,
}

export interface Events {
  'addThing': IThing,
}

export enum ManagerEvent {
  ADD_THING = 'addThing',
}

export const planner: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({ things: initialThings }));
};
