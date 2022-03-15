/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MainHeader from '../../components/headers/MainHeader';
import HomeSection from '../../components/sections/HomeSection';
export default function HomePage() {
  return (
    <>
      <MainHeader />
      <HomeSection />
    </>
  );
}
