import React from 'react';

import Dashboard from './components/layout/Dashboard';
import Things from './components/planner/Things';

const App: React.FC = () => {
  return (
    <Dashboard>
      <div className='container'>
        <Things />
      </div>
    </Dashboard>
  );
};

export default App;
