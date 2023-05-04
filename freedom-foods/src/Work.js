import React from "react";
import Dinner5 from "./images/dinner5.png";
import Dinner2 from "./images/dinner2.png";
import Dinner3 from "./images/dinner4.png";
import img12 from "./images/img12.png";
// import PickMeals from "../Assets/pick-meals-image.png";
// import ChooseMeals from "../Assets/choose-image.png";
// import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
    //   image: PickMeals,
      title: "Breakfast",
      Image1: Dinner2,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
    //   image: ChooseMeals,
      title: "Lunch",
      Image1: Dinner5,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
    //   image: DeliveryMeals,
      title: "Dinner",
      Image1: Dinner3,
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="about-background-image-container">
          <img src={img12} alt="" className="img6" />
        </div>
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              {/* <img src={data.image} alt="" /> */}
            </div>
            <h2>{data.title}</h2>
            <img src={data.Image1} />
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
