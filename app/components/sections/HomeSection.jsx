import React from 'react';
import './css/home-section.css';
import home from '../../images/home-page-2.jpg';
import PickUpForm from '../forms/PickUpForm';
import HomeHorizontalSlider from '../sliders/HomeHorizontalSlider';

function HomeSection() {
  return (
    <div className="home__section">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="home__image" src={home} alt="Home Image" />
      <div className="container">
        <div className="pick__up">
          <PickUpForm />
        </div>
      </div>
      <div className="search__holder">
        <HomeHorizontalSlider />
      </div>
    </div>
  );
}

export default HomeSection;
