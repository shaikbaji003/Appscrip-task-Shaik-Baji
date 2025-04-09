import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import './index.css';
import iconImage from './element-4.png'; 


const Header = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);

    const onClickNavbar = () => {
        setNavbarToggle(!navbarToggle);
    };

    const isDisplayNavigationItems = navbarToggle
        ? "navigation-items-container"
        : "not-display-navigation-items-container";

    return (
        <>
            {/* 🔳 Top Black Bar */}
            {/* <div className="top-black-bar">
                <span className="top-bar-item">📦 Lorem ipsum dolor</span>
                <span className="top-bar-item">📦 Lorem ipsum dolor</span>
                <span className="top-bar-item">📦 Lorem ipsum dolor</span>
            </div> */}


<div className="top-black-bar">
  <span className="top-bar-item">
    <img src={iconImage} alt="icon" className="custom-icon" />
    Lorem ipsum dolor
  </span>
  <span className="top-bar-item">
    <img src={iconImage} alt="icon" className="custom-icon" />
    Lorem ipsum dolor
  </span>
  <span className="top-bar-item">
    <img src={iconImage} alt="icon" className="custom-icon" />
    Lorem ipsum dolor
  </span>
</div>

            {/* 🧭 Main Header */}
            <div className="header-route-container">
                <div className='small-device-header-container'>
                    <div className='logo-container'>
                        {navbarToggle ? (
                            <GiTireIronCross className="cross-mark-icon" size={25} onClick={onClickNavbar} />
                        ) : (
                            <HiMiniBars3 className="nav-bar-icon" size={25} onClick={onClickNavbar} />
                        )}
                        <Link to="/" className="nav-link">
                            <img
                                src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png"
                                alt=""
                                className="website-logo"
                            />
                        </Link>
                    </div>
                    <div className="website-name-container">
                        <Link to="/" className="nav-link">
                            <h1 className="website-name">LOGO</h1>
                        </Link>
                    </div>
                    <ul className="nav-items-container">
                        <li className="nav-item"><FiSearch size={24} /></li>
                        <li className="nav-item"><IoHeartOutline size={24} /></li>
                        <li className="nav-item">
                            <Link to="/Products" className="nav-link"><BsHandbag size={21} /></Link>
                        </li>
                    </ul>
                </div>

                <div className="large-device-header-container">
                    <div className='logo-container'>
                        <Link to="/" className="nav-link">
                            <img
                                src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png"
                                alt=""
                                className="website-logo"
                            />
                        </Link>
                    </div>
                    <div className="website-name-container">
                        <Link to="/" className="nav-link">
                            <h1 className="website-name">LOGO</h1>
                        </Link>
                    </div>
                    <ul className="nav-items-container">
                        <li className="nav-item"><FiSearch size={24} /></li>
                        <li className="nav-item"><IoHeartOutline size={24} /></li>
                        <li className="nav-item"><BsHandbag size={21} /></li>
                        <li className="nav-item"><CiUser size={24} /></li>
                        <li className="nav-item">
                            <select className="language-select">
                                <option id="English">ENG</option>
                                <option id="HINDI">HIN</option>
                                <option id="TELUGU">TEL</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className="small-device-bottom-header-container">
                    <ul className={isDisplayNavigationItems}>
                        <li className="navigation-item">SHOP</li>
                        <li className="navigation-item">SKILLS</li>
                        <li className="navigation-item">STORIES</li>
                        <li className="navigation-item">ABOUT</li>
                        <li className="navigation-item">CONTACT US</li>
                    </ul>
                </div>

                <div className="large-device-bottom-header-container">
                    <ul className="navigation-items-container">
                        <li className="navigation-item">SHOP</li>
                        <li className="navigation-item">SKILLS</li>
                        <li className="navigation-item">STORIES</li>
                        <li className="navigation-item">ABOUT</li>
                        <li className="navigation-item">CONTACT US</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;
