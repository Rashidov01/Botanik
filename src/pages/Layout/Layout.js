import React from 'react';
import { Footer, Header } from '../../components';
import { Outlet } from 'react-router-dom';

const Layaut = () => {

  return (
    <>
      <div className='wrapper'>
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <Footer />
      </footer>

    </>
  );
};

export default Layaut;