import React from "react";
import "./event.css";
import cross from "../Assets/cross.png";
import zoom from "../Assets/zoom.png";
import minimize from "../Assets/minimize.png";
import store from "../Assets/store.png";

const Event = () => {
  return (
    <div className="flex-box">
      <div className="container">
        <div className="header">
          <div className="left-header">
            <img src={store} alt="" className="store"/>
            <h3>Events Store</h3>
          </div>
          <div className="right-header">
            <img src={minimize} alt="" className="icons"/>
            <img src={zoom} alt="" className="icons"/>
            <img src={cross} alt="" className="icons"/>
          </div>
        </div>
        <div className="events">
          <div className="event"></div>
          <div className="buy"></div>
        </div>
        <div className="desc-box">
          <div className="description"></div>
          <div className="team-details"></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
