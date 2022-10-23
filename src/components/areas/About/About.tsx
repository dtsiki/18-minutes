import React from 'react';

import './style.scss';

const Tasks: React.FC = () => {
  return (
    <div className='about-area'>
      <h2 className='heading-l3 spacer bottom small'>
              What is 18 minutes?
      </h2>
      <p className='text'>
        18 minute is a task board, based upon a <a
          className='link'
          href='https://www.goodreads.com/book/show/12138871'
          target='_blank'
          rel='noopener noreferrer'>
          book
        </a> of the same name by Peter Bregman
      </p>
      <p className='text spacer bottom medium'>
        The 18 minutes method clearly shows how you can cut through all the daily clutter and distractions and find a way to focus on those key items which are truly the top priorities in your life.
      </p>
      <h2 className='heading-l3 spacer bottom small'>
        Preparations
      </h2>
      <p className='text spacer bottom medium'>
        Before you get started with 18 minutes, you have to choose your things: the areas that are important to you.
        It could be work, family, health, relationships, etc.
        From here on, you will only do what you need within these areas.
      </p>
      <h2 className='heading-l3 spacer bottom small'>
        Steps
      </h2>
      <p className='text'>
        The 18 minutes refers to the importance of creating a daily habit of reflection and focus on what you want to accomplish, knowing that you won&#39;t get everything done.
      </p>
      <p className='text spacer bottom small'>
        Here how it works:
      </p>
      <ul className='list spacer bottom small'>
        <li className='text'>
          <strong>Morning 5 minutes: </strong>
          take 5 minutes in the morning to decide your to do list and plan ahead for the day.
          Decide what will make the day successful and that will further your focus for the year.
        </li>
        <li className='text'>
          <strong>1 minute every hour: </strong>
          check your progress every hour or during the day.
          Ask yourself if you spent your time productively.
        </li>
        <li className='text'>
          <strong>Evening 5 minutes: </strong>
          review how the day went.
          Revel in the lessons you learned, the success you achieved, and come up with a plan for the next day.
        </li>
      </ul>
      <p className='text'>
        If you do the same thing in the same way over and over again, the outcome is predictable. In the case of 18 minutes, you’ll get the right things done.
      </p>
    </div>
  );
};

export default Tasks;
