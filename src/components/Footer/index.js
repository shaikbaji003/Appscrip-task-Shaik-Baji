import React, { useState } from "react";

import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

import "./index.css";


const Footer = () => {
  const [isMettaMuse, setIsMettaMuse] = useState(false);
  const [isQuickLinks, setIsQuickLinks] = useState(false);
  const [isFollowUs, setIsFollowUs] = useState(false);
  return (
    <>
      <div className="wrapper">
        <div className="letterAndcontact">
          <div className="newsletter">
            <h1 className="footerHeading">BE THE FIRST TO KNOW</h1>
            <p className="footersignInDescription">Sign up for updates from mettā muse.</p>
            <div className="inputsBtn">
              <input
                className="email"
                type="email"
                placeholder="Enter your e-mail..."
              />
              <button className="subscribeBtn">subscribe</button>
            </div>
          </div>

          <div className="contactDetails">
            <div className="contactUs">
              <p className="contactUsHeading">contact us</p>
              <div className="contactUsdetails">
                <p className="number">+44 221 133 5360</p>
                <p className="customerCare">customercare@mettamuse.com</p>
              </div>
            </div>
            <div className="callUs-container">
              <hr/>
            <p className="containerHeading">CALL US</p>
            <div className="smallContactUsdetails">
                  <p className="number">+44 221 133 5360</p>
                  <p className="diamond">&diams;</p>
                  <p className="customerCare">customercare@mettamuse.com</p>
                </div>
                <hr/>
            </div>
            <div className="currency">
              <p className="currencyHeading">Currency</p>
              <div className="currencyContainer">
              <img className="countryImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718017107/United_States_of_America_US_dmngoz.jpg" alt="" style={{}} />
               <p className="diamond">&diams;</p>
               <p className="usd">USD</p>
              </div>
              <p className="smallText">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        <hr  />
        <div className="actionsLinksContainer">
          <div className="largeContainer">
              <p className="containerHeading">mettā muse</p>
            <ul className="linksContainer">
              <li className="links">About Us</li>
              <li className="links">Stories</li>
              <li className="links">Artisans</li>
              <li className="links">Boutiques</li>
              <li className="links">Contact Us</li>
              <li className="links">EU Compliances Docs</li>
            </ul>
          </div>
          <div className="samllConatiner">
            <div
              className="footerHeadingCont"
              onClick={() => setIsMettaMuse((prev) => !prev)}
            >
              <div className="smallHeadingAndAngleContainer">
                <p className="smallContainerHeading">mettā muse</p>
                <FaAngleDown height={20}
                  width={20}
                  color="#ffffff"
                  style={{
                    rotate: `${isMettaMuse ? "180deg" : "0deg"}`,
                    transition: "rotate 0.15s ease-in-out",
                  }}/>
              </div>
            </div>
            {isMettaMuse ? (
              <ul className={`${isMettaMuse ? "linksContainer" : ""}`}>
                <li className="links">About Us</li>
                <li className="links">Stories</li>
                <li className="links">Artisans</li>
                <li className="links">Boutiques</li>
                <li className="links">Contact Us</li>
                <li className="links">EU Compliances Docs</li>
              </ul>
            ) : null}
            <hr />
          </div>
          <div className="quickLinks">
              <div className="largeContainer">
                  <p className="containerHeading">Quick Links</p>
                <ul  className="linksContainer">
                  <li className="links">Orders & Shipping</li>
                  <li className="links">Join/Login as a Seller</li>
                  <li className="links">Payment & Pricing</li>
                  <li className="links">Return & Refunds</li>
                  <li className="links">FAQs</li>
                  <li className="links">Privacy Policy</li>
                  <li className="links">Terms & Conditions</li>
                </ul>
              </div>
          </div>
          <div className="samllConatiner">
            <div
              className="footerHeadingCont"
              onClick={() => setIsQuickLinks((prev) => !prev)}
            >
              <div className="smallHeadingAndAngleContainer">
                <p className="smallContainerHeading">Quick Links</p>
                <FaAngleDown height={20}
                  width={20}
                  color="#ffffff"
                  style={{
                    rotate: `${isMettaMuse ? "180deg" : "0deg"}`,
                    transition: "rotate 0.15s ease-in-out",
                  }}/>
              </div>
            </div>
            {isQuickLinks ? (
              <ul className={`${isQuickLinks ? "linksContainer" : ""}`}>
                <li className="links">Orders & Shipping</li>
                <li className="links">Join/Login as a Seller</li>
                <li className="links">Payment & Pricing</li>
                <li className="links">Return & Refunds</li>
                <li className="links">FAQs</li>
                <li className="links">Privacy Policy</li>
                <li className="links">Terms & Conditions</li>
              </ul>
            ) : null}
             <hr/>
          </div>
          <div className="followus">
          <div className="largeContainer">
            <div className="socialLinksContainer">
                <p className="containerHeading">Follow Us</p>
              <div className="socialAcc">
              <FaSquareInstagram color="#ffffff" size="25"/>
              <CiLinkedin color="#ffffff" size="25" />
              </div>
            </div>
            </div>
            <div className="samllConatiner">
            <div className="socialLinksContainer">
              <div
                className="footerHeadingCont"
                onClick={() => setIsFollowUs((prev) => !prev)}
              >
                <div className="smallHeadingAndAngleContainer">
                <p className="smallContainerHeading">Follow Us</p>
                <FaAngleDown height={20}
                  width={20}
                  color="#ffffff"
                  style={{
                    rotate: `${isMettaMuse ? "180deg" : "0deg"}`,
                    transition: "rotate 0.15s ease-in-out",
                  }}/>
                </div>
              </div>
              </div>
              <div className="socialAcc">
                {isFollowUs ? (
                  <div className={`${isFollowUs ? "mt20" : ""}`}>
                    <FaSquareInstagram color="#ffffff" size="25"/>
                    <CiLinkedin color="#ffffff" size="25" />
                  </div>
                ) : null}
                <hr/>
              </div>
            </div>
            <div className="paymentMethodsContainer">
              <p className="metta-museAccepts">mettā muse ACCEPTS</p>
              <div className="payments">
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718094933/Group_136188_a7xvu0.png" alt=""/>
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718095061/Group_136190_mnkahq.png" alt=""/>
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718095137/Group_136192_b6b4zq.png" alt=""/>
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718095196/Group_136193_ojhii9.png" alt=""/>
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718095248/Group_136194_b404hr.png" alt=""/>
                <img className="paymentImage" src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1718095305/Group_136195_uucval.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
          <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;