import React from 'react';
import './Navbar.css';
import logo from '../img/logo2.png';

const Navbar = () => {
  return (
    <section id="header">
        <a href="#"><img src={logo} class="logo" alt=""/></a>

        <div>
            <ul id="navbar">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
            </ul>
        </div>


    </section>
  )
}

export default Navbar
