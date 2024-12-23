import React from "react";
import { Link } from "react-router-dom";
const Blog = ({ date, heading, image, linkUrl }) => {
  return (
    <>
      <div
        className="service__unique__item pb-40 pt-40"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="left__service">
          <div className="serial__adjust">
            <div className="cont">
              <span className="dates"> {date} </span>
              <h3>
                <Link to={"/blog/"+linkUrl}>{heading}</Link>
              </h3>
            </div>
          </div>
          <div className="opa__thumb imgc">
            <img
              src={image}
              alt="img-opa"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
