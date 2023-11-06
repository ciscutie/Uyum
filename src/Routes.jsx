import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Review from './Pages/Review';
import ErrorPage from './Pages/ErrorPage';
import GetStarted from './Pages/GetStarted';

const NavigationRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<GetStarted />} />
      <Route path='*' element={<ErrorPage />} />

      <Route path='/uyum' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/review' element={<Review />} />
    </Routes>
  );
};

export default NavigationRoute;
