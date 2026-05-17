import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                
                {/* Left Section: Icon & Brand */}
                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-basket-shopping basket-icon"></i>    
                    <div className="d-flex flex-column">
                        <a className="navbar-brand" href="/">Fruitkha</a>
                        <span className="navbar-text">Fresh Fruits Online</span>
                    </div>
                </div>

                    <ul className="navbar-nav mx-auto list">
                        <li className="nav-item"><a className="nav-link lists" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link lists" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link lists" href="/pages">Pages</a></li>
                        <li className="nav-item"><a className="nav-link lists" href="/news">News</a></li>
                        <li className="nav-item"><a className="nav-link lists" href="/contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link lists" href="/shop">Shop</a></li>
                    </ul>
                {/*</div>*/}


                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-shopping-cart cart-icon"></i>
                    <i className="fa-solid fa-search search-icon"></i>
                </div>

            </div> 
        </nav>
    );
};

export default NavBar;