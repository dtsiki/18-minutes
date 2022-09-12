import { createStoreon } from 'storeon';
import { persistState } from '@storeon/localstorage';

import { Events, planner, State } from './planner';

export const store = createStoreon<State, Events>([planner, persistState()]);
