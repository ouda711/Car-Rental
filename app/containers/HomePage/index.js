/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import MainHeader from '../../components/headers/MainHeader';
import HomeSection from '../../components/sections/HomeSection';
import HomeCardSection from '../../components/sections/HomeCardSection';
import RentalCarSection from '../../components/sections/RentalCarSection';
import AdvertSection from '../../components/sections/AdvertSection';
import CarCategories from '../../components/sections/CarCategories';
import MainFooter from '../../components/footer/MainFooter';
export default function HomePage() {
  return (
    <>
      <MainHeader />
      <HomeSection />
      <HomeCardSection />
      <RentalCarSection />
      <AdvertSection />
      <CarCategories />
      <MainFooter />
    </>
  );
}
