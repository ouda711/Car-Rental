import React from 'react';
import './css/home-card-section.css';
import servicecar from '../../images/car-service.jpg';
import rentcar from '../../images/car-rent.jpg';
import buycar from '../../images/car-buy.jpg';

function HomeCardSection() {
  return (
    <div className="home__card__section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card__rent border-white">
              <figure className="snip1527">
                <div className="image">
                  <img src={servicecar} alt="pr-sample23" />
                </div>
                <figcaption>
                  <div className="date">
                    <span className="day">28</span>
                    <span className="month">Oct</span>
                  </div>
                  <h3>The World Ended Yesterday</h3>
                  <p>
                    You know what we need, Hobbes? We need an attitude. Yeah,
                    you cant be cool if you dont have an attitude.
                  </p>
                </figcaption>
                <a href="#"></a>
              </figure>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card card__service border-white">
              <figure className="snip1527">
                <div className="image">
                  <img src={rentcar} alt="pr-sample23" />
                </div>
                <figcaption>
                  <div className="date">
                    <span className="day">28</span>
                    <span className="month">Oct</span>
                  </div>
                  <h3>The World Ended Yesterday</h3>
                  <p>
                    You know what we need, Hobbes? We need an attitude. Yeah,
                    you cant be cool if you dont have an attitude.
                  </p>
                </figcaption>
                <a href="#"></a>
              </figure>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card card__buy border-white">
              <figure className="snip1527">
                <div className="image">
                  <img src={buycar} alt="pr-sample23" />
                </div>
                <figcaption>
                  <div className="date">
                    <span className="day">28</span>
                    <span className="month">Oct</span>
                  </div>
                  <h3>The World Ended Yesterday</h3>
                  <p>
                    You know what we need, Hobbes? We need an attitude. Yeah,
                    you cant be cool if you dont have an attitude.
                  </p>
                </figcaption>
                <a href="#"></a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardSection;
