import React from "react";
import { BsStarFill } from "react-icons/bs";
import "./avis.css";

const Avi = () => {
  return (
    <>
      <div className="clientavi">
        <hr />
        <h1>Our client say about us</h1>
        <div className="boite">
          <div className="boiteP">
            <div className="circle"></div>
            <div className="decription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                adipisci officiis nulla et delectus blanditiis.
              </p>
              <h6>loraine Daigle</h6>
            </div>
            <div className="start">
              <h3>Ratigne</h3>
              <span>
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />{" "}
              </span>
            </div>
          </div>
          <div className="boiteP">
            <div className="circle"></div>
            <div className="decription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                adipisci officiis nulla et delectus blanditiis.
              </p>
              <h6>loraine Daigle</h6>
            </div>
            <div className="start">
              <h3>Ratigne</h3>
              <span>
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />{" "}
              </span>
            </div>
          </div>
          <div className="boiteP">
            <div className="circle"></div>
            <div className="decription">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                adipisci officiis nulla et delectus blanditiis.
              </p>
              <h6>loraine Daigle</h6>
            </div>
            <div className="start">
              <h3>Ratigne</h3>
              <span>
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />
                <BsStarFill style={{ color: "yellow" }} />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="stay-tuned">
                <h2>Stay Tuned</h2>
                <p>We have exciting news to share with you. Be among the first to discover them by staying connected with us.</p>
                <div className="subscribe-form">
                    <input type="email" placeholder="Your email address"/>
                    <button>Submit</button>
                </div>
                <p>Don't miss out on any updates, special offers, or upcoming events. Join our mailing list to stay informed in real-time.</p>
        </section>
    </>
  );
};

export default Avi;
