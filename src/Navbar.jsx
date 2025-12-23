import React, { useState } from 'react'


function Navbar() {
    return (
        <nav 
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#3C5D51" }}>
            <div className="container-fluid">
                {/* Brand */}
                <a className="navbar-brand text-white m-3" href="#">FURI....</a>
                {/* Toggle Button */}
                <button 
                    className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNav"  aria-controls="navbarNav"  aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* COLLAPSE MENU */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    {/* Center Menu */}
                    <ul className="navbar-nav mx-auto gap-4">
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".Home.jsx">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".Shop.jsx">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".About.jsx">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".Service.jsx">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".Blog.jsx">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white custom-hover" href=".Contact.jsx">Contact us</a>
                        </li>
                    </ul>

                    {/* Right Icons */}
                    <div className="d-flex align-items-left gap-3 na">
                        <button className="bi bi-person fs-4 text-white btn"  onChange={() => setShowCart(true)}></button>
                        <button className="bi bi-cart fs-4 text-white btn" onChange={() => setShowCart(true)} ></button>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;
