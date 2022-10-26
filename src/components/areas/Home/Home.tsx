import React, { useMemo } from 'react';
import { useStoreon } from 'storeon/react';

import { AreaVariant } from '../../../App';
import { greetings } from '../../../constants/greetings';
import { ITask, IThing } from '../../../interfaces';
import { getRandomNumberFromInterval } from '../../../utils';
import ProgressBar, { ProgressBarVariant } from '../../common/ProgressBar/ProgressBar';
import Task from '../../planner/Task';
import Thing from '../../planner/Thing';

import './style.scss';

interface Props {
  handleArea: (area: AreaVariant) => void;
}

const Home: React.FC<Props> = ({ handleArea }: Props) => {
  const { user, things, tasks } = useStoreon('user', 'things', 'tasks');

  const renderLatestThings = useMemo(() => {
    const thingsLimit = 3;
    const latestThings = things.length > thingsLimit ? things.slice(0, thingsLimit) : things;
    let items = [];
    let showInitial = false;

    if (latestThings.length >= thingsLimit) {
      items = [...latestThings];
      showInitial = false;
    }

    if (latestThings.length === 0) {
      items = new Array(thingsLimit)
        .fill(null);
      showInitial = true;
    }

    if (latestThings.length === 2) {
      showInitial = true;
      items = [null, ...latestThings];
    }

    if (latestThings.length === 1) {
      showInitial = true;
      items = [null, ...latestThings, null];
    }

    return items.map((thing: IThing | null, index: number) => {
      return (
        <li
          key={index}
          className='col col--33'>
          <Thing
            thing={thing || undefined}
            isInitial={index === 0 && showInitial} />
        </li>
      );
    });
  }, [things]);

  const renderTasksToDo = useMemo(() => {
    const tasksLimit = 3;
    const activeTasks = tasks.filter((task: ITask) => !task.isCompleted);
    const latestTasks = activeTasks.length > tasksLimit ? activeTasks.slice(0, tasksLimit) : activeTasks;
    let items = [];

    if (latestTasks.length === 0) {
      items = new Array(tasksLimit)
        .fill(null);
    }

    if (latestTasks.length >= tasksLimit) {
      items = [...latestTasks];
    }

    if (latestTasks.length < tasksLimit) {
      items = [
        ...latestTasks,
        ...new Array(tasksLimit - latestTasks.length)
          .fill(null)
      ];
    }

    return items.map((task: ITask | null, index: number) => {
      const thing = task ? things.find((thing: IThing) => thing.id === task.thingID) : undefined;

      return (
        <li
          key={index}
          className='home-area__task spacer bottom small'>
          {task ? (
            <Task
              thing={thing}
              task={task}
              showBackground />
          ) : (
            <Task isSkeleton />
          )}
        </li>
      );
    });
  }, [tasks, things]);

  const renderStat = useMemo(() => {
    const thingsCount = things.length;
    const tasksCount = tasks.length;
    const activeTasks = tasks.filter((task: ITask) => !task.isCompleted).length;
    const completedTasks = tasks.filter((task: ITask) => task.isCompleted).length;

    const stat = [
      {
        title: 'Total things',
        number: thingsCount
      },
      {
        title: 'Total tasks',
        number: tasksCount
      },
      {
        title: 'Completed tasks',
        number: completedTasks
      },
      {
        title: 'Active tasks',
        number: activeTasks
      }
    ];

    return stat.map((item) => {
      return (
        <li
          key={item.title}
          className='col col--25 home-area__stat'>
          <div className='card'>
            <div className='card__number'>
              {item.number}
            </div>
            <div className='card__title'>
              {item.title}
            </div>
          </div>
        </li>
      );
    });
  }, [tasks, things]);

  const renderProgressBar = useMemo(() => {
    const tasksCount = tasks.length;
    const completedTasks = tasks.filter((task: ITask) => task.isCompleted).length;
    const tasksProgress = Math.round((completedTasks * 100) / tasksCount);

    return (
      <ProgressBar
        value={tasksCount ? tasksProgress : 0}
        variant={ProgressBarVariant.INLINE} />
    );
  }, [tasks]);

  const renderHeader = useMemo(() => {
    const greetingIndex= getRandomNumberFromInterval(0, greetings.length);
    const greeting = greetings[greetingIndex] || greetings[0];
    const username = !!user && user.name.length > 0 ? `, ${user.name}` : '!';

    return (
      <h1 className='heading-l2 spacer bottom medium'>
        {greeting}{username}
      </h1>
    );
  }, [user]);

  return (
    <div className='home-area'>
      {renderHeader}
      <h2 className='heading-l3 spacer bottom medium'>Latest things</h2>
      <ul className='row'>
        {renderLatestThings}
      </ul>
      <div className='spacer bottom extra-large'>
        <button
          className='button button--light'
          onClick={() => handleArea(AreaVariant.THINGS)}>
          Manage things
        </button>
      </div>
      <div className='row spacer bottom extra-large'>
        <div className='col col--50'>
          <h2 className='heading-l3 spacer bottom medium'>Tasks to do</h2>
          <ul>
            {renderTasksToDo}
          </ul>
          <div className='spacer top medium'>
            <button
              className='button button--light'
              onClick={() => handleArea(AreaVariant.TASKS)}>
              Manage tasks
            </button>
          </div>
        </div>
        <div className='col col--50'>
          <h2 className='heading-l3 spacer bottom medium'>Summary</h2>
          <div className='home-area__stats'>
            <ul className='row row--no-margin'>
              {renderStat}
            </ul>
          </div>
          <h2 className='heading-l3 spacer top large'>Your progress</h2>
          <div className='home-area__progress spacer top medium'>
            {renderProgressBar}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
