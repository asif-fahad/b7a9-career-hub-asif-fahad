import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className='mx-10'>
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <div className='mt-5'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;