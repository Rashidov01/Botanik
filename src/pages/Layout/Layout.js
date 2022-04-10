import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div className='site-container'>
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>

      <footer>
        <Footer />
      </footer>

      </div>
    </>
  );
}