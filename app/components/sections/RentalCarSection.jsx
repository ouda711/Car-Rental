import React from 'react';
import './css/rental-car-section.css';
import { Link } from 'react-router-dom';
import chevvy from '../../images/chevrolet-covet.jpg';

function RentalCarSection() {
  return (
    <div className="rental__section">
      <div className="section__title">
        <h2>For Rent</h2>
        <Link to="/">See All</Link>
      </div>
      <div className="section__body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <CarHolder />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <CarHolder />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <CarHolder />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <CarHolder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarHolder() {
  return (
    <div className="car__holder">
      <div className="badge">Hot</div>
      <div className="product__thumb">
        <img src={chevvy} alt="Chevrolet" />
      </div>
      <div className="product__details">
        <span className="product__category">Chevrolet</span>
        <h4>
          <a href="/">Chevrolet Covet Grand Sport</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="product-bottom-details">
          <div className="product-price">
            $299/day
          </div>
          <div className="product-links">
            <a href="/"><i className="fa fa-heart"></i></a>
            <a href="/"><i className="fa fa-shopping-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalCarSection;
