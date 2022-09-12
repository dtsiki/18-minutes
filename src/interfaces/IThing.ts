import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ThingColor } from '../components/planner/Thing/Thing';

export interface IThing {
  id: string;
  title: string;
  icon?: IconDefinition;
  color?: ThingColor;
}
