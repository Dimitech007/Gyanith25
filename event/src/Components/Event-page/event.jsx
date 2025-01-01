import React from "react";
import "./event.css";
import cross from "../Assets/cross.png";
import zoom from "../Assets/zoom.png";
import minimize from "../Assets/minimize.png";
import store from "../Assets/store.png";
import logo from "../Assets/logo.png";


const data = {
    event: "Event",
    date: "12/12/2022",
    time: "10:00 AM",
    location: "Location",
    price: "Price",
    description: "Description abt the event.",
    teamDetails: "Team Details",
    logo: '',
    price: '1500',
    seats:'100',
    
  };
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
          <div className="event">
            <img src={logo} alt="" />
            <h1>{data.event}</h1>
          </div>
          <div className="buy">
            <h3 class="buy-button">Buy For Rs.{data.price}</h3>
          </div>
        </div>
        <div className="desc-box">
          <div className="description">
            <h5 class="deschead">Description</h5>
            <p class="descpar">{data.description}</p>
            <h5 class="sleft">Seats left:{data.seats}</h5>

          </div>
          <div className="team-details">
            <h5 class="detail">Team Details</h5>
            <p class="tdet">{data.teamDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
