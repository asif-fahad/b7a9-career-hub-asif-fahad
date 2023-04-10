import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className='mx-10'>
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;