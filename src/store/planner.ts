import { StoreonModule } from 'storeon';

import { IThing, ITask } from '../interfaces';

export interface State {
  things: Array<IThing>,
  tasks: Array<ITask>
}

export interface Events {
  'addThing': IThing,
  'deleteThing': string,
  'updateThing': IThing,
  'addTask': ITask,
  'deleteTask': ITask,
  'updateTask': ITask
}

export enum PlannerEvent {
  ADD_THING = 'addThing',
  DELETE_THING = 'deleteThing',
  UPDATE_THING = 'updateThing',
  ADD_TASK = 'addTask',
  DELETE_TASK = 'deleteTask',
  UPDATE_TASK = 'updateTask'
}

export const planner: StoreonModule<State, Events> = (store) => {
  store.on('@init', () => ({
    things: [],
    tasks: []
  }));

  store.on(PlannerEvent.ADD_THING, (state, event) => ({
    things: [...state.things, event]
  }));

  store.on(PlannerEvent.DELETE_THING, (state, event) => ({
    things: state.things.filter((thing) => thing.id !== event),
    tasks: state.tasks.filter((task) => task.thingID !== event)
  }));

  store.on(PlannerEvent.UPDATE_THING, (state, event) => ({
    things: state.things.map((thing) => thing.id === event.id ? event : thing)
  }));

  store.on(PlannerEvent.ADD_TASK, (state, event) => ({
    tasks: [...state.tasks, event]
  }));

  store.on(PlannerEvent.DELETE_TASK, (state, event) => ({
    tasks: state.tasks.filter((task) => task.id !== event.id)
  }));

  store.on(PlannerEvent.UPDATE_TASK, (state, event) => ({
    tasks: state.tasks.map((task) => task.id === event.id ? event : task)
  }));
};
