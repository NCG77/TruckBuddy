import React from "react";

export default function Image_Recoginition() {
    return (
        <div>
            <nav>
                <div className="nav__bar">
                    <div className="logo nav__logo">
                        <a href="#">
                            <img src={headerImg} alt="logo" />
                        </a>
                    </div>
                    <div
                        className="nav__menu__btn"
                        id="nav-menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i
                            className={isMenuOpen ? "ri-close-line" : "ri-menu-3-line"}
                        ></i>
                    </div>
                </div>
                <ul
                    className={`nav__links ${isMenuOpen ? "open" : ""}`}
                    id="nav-links"
                >
                    <li>
                        <a href="#home">HOME</a>
                    </li>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#service">SERVICE</a>
                    </li>
                    <button className="btn">CONTACT US</button>
                </ul>
            </nav>

        </div>
    );
}

