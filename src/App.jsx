import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className=''>
        <Header></Header>
      </div>
      <div className='mt-5 min-h-[calc(100vh-68px)]'>
        <Outlet></Outlet>
      </div>
      <div className='mt-5 mb-0'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;