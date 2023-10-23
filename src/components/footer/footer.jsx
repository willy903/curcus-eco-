import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h6>Get connected with us on social network</h6>
        <div className="socialNetw">
          <FaFacebookF size={16} />
          <RiTwitterXFill size={16} />
          <AiFillInstagram size={16} />
          <RiWhatsappFill size={16} />
        </div>
      </div>
      <div className="center">
        <div className="centerItem">
          <h3>CURCUS</h3>
          <h5>
            Our journey began with a mission to bring the finest quality curcuma
            to your doorstep. We work directly with local farmers to ensure a
            sustainable and ethical supply chain.
          </h5>
        </div>
        <div className="centerItem">
          <h2>Products</h2>
          <h5>red turmeric</h5>
          <h5>yellow turmeric</h5>
          <h5>chocolate turmeric</h5>
          <h5>brown turmeric</h5>
        </div>
        <div className="centerItem">
          <h2>use full links</h2>
          <h5>Your acount</h5>
          <h5>your cart</h5>
          <h5>product</h5>
          <h5>about us</h5>
        </div>
        <div className="centerItem">
          <h2>contact</h2>
          <h5><AiFillHome/>New York, NY 10012, US</h5>
          <h5><IoMdMail/>info@example.com</h5>
          <h5><BsFillTelephoneFill/>+ 01 234 567 88</h5>
          <h5><IoLogoWhatsapp/>+ 01 234 567 89</h5>
        </div>
      </div>
      <div className="bottom">
        <h6>© 2020 Copyright: sw-dev 2023</h6>
      </div>
    </div>
  );
};

export default Footer;
