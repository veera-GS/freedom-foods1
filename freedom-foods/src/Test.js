import React from "react";
import sidee from "./images/img11.png";
import { AiFillStar } from "react-icons/ai";

const Test = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Message</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="Message" />
          <button className="secondary-button">Send</button>
        </div>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="about-background-image-container">
          <img src={sidee} alt="" className="img6" />
        </div>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2> Rahul</h2>
      </div>
    </div>
  );
};

export default Test;
