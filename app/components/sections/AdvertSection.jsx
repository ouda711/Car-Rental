import React from 'react';
import './css/advert-section.css';

function AdvertSection() {
  return (
    <div className="advert__section">
      <div className="container-fluid">
        <div className="dash"></div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card advert__one">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on
                  the card title and make up the bulk
                  of the card's content.
                </p>

                <a href="#" className="btn btn-outline-primary btn-sm">
                  Card link
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  <i className="far fa-heart"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card advert__two">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the
                  card title and make up the bulk of the
                  card's content.
                </p>

                <a href="#" className="btn btn-outline-primary btn-sm">
                  Card link
                </a>
                <a href="#" className="btn btn-outline-secondary btn-sm">
                  <i className="far fa-heart"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertSection;
