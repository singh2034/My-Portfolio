import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container row">
          <div className="text-center text-decoration-underline text-white col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <h3>Connect With Me </h3>
          </div>
          <div className="text-center col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/aayush-singh-29a7801b2/"
              rel="noreferrer"
              target="_blank"
            >
              <BsLinkedin size={25} />
            </a>

            <a
              className="whatsapp"
              href="https://api.whatsapp.com/send?phone=9958721272"
              rel="noreferrer"
              target="_blank"
            >
              <BsWhatsapp size={25} />
            </a>

            <a
              className="instagram"
              href="https://www.instagram.com/aayush5723/"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram size={25} />
            </a>
          </div>
        </div>
        <h6 className="text-center mt-4 text-secondary">
          Made by Aayush &copy; {new Date().getFullYear()}
        </h6>
      </div>
    </>
  );
};

export default Footer;
