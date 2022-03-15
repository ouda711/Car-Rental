import React from 'react';
import { Link } from 'react-router-dom';
import './css/main-header.css';
import { User, Phone, Clock, ShoppingCart } from 'react-feather';
import logo from '../../images/logo.png';

function MainHeader() {
  return (
    <>
      <div className="top__header">
        <div className="top__header__left">
          <Link to="/">Advice & Howto</Link>
          <Link to="/">Wishlist</Link>
          <Link to="/">Compare list</Link>
        </div>
        <div className="top__header__right">
          <Link to="/">Currency</Link>
          <div className="user__options">
            <span className="user__icon">
              <User />
            </span>
            <span className="user__links">
              <Link to="/">Register</Link>/<Link to="/">Login</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bottom__header">
        <div className="logo__container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="contact__container">
          <div className="phone__contact">
            <div className="contact__icon">
              <Phone />
            </div>
            <div className="contact__text">
              <a href="tel:+254746764503" className="contact__initial__text">
                Call us Free
              </a>
              <div className="contact__detail">+254(0)7-4676-4503</div>
              <div className="contact__extra">
                <Link to="/">Request a call back</Link>
              </div>
            </div>
          </div>

          <div className="phone__contact">
            <div className="contact__icon">
              <Clock />
            </div>
            <div className="contact__text">
              <a href="/" className="contact__initial__text">
                Open Hours
              </a>
              <div className="contact__detail">8:00am - 8:00pm</div>
              <div className="contact__extra">
                <Link to="/">Monday - Saturday</Link>
              </div>
            </div>
          </div>

          <div className="phone__contact">
            <div className="contact__icon">
              <ShoppingCart />
            </div>
            <div className="contact__text">
              <a href="/" className="contact__initial__text">
                Shopping Cart
              </a>
              <div className="contact__detail">0 Items</div>
              <div className="contact__extra">
                <Link to="/">$ 0.00</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">Reservation</a>
          <a href="#contact">Service</a>
          <a href="#about">Shop</a>
          <a href="/">Logistics</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </div>
      </nav>
    </>
  );
}

export default MainHeader;
