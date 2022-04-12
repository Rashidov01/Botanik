import React from 'react';
import SiteHeader from '../../components/Header/Site-header';
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div className='site-container'>
        <header className='site-header'>
          <SiteHeader />
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