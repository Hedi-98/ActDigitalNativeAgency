import React, { useEffect, useState } from "react";

import sectionStar from "../../assets/img/about/section-star.png";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

import AOS from "aos";
import "aos/dist/aos.css";

const tabList = [
  // {
  //   id: 1,
  //   name: "A propos",
  //   value: "about",
  // },
  {
    id: 1,
    name: "Services",
    value: "experience",
  },
  // {
  //   id: 3,
  //   name: "Education",
  //   value: "education",
  // },
  {
    id: 2,
    name: "Contact",
    value: "skills",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("experience");
  
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          <div className="personal__head text-center">
            <img
              src={sectionStar}
              className="mb-30"
              alt="star"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <p className="descrp" data-aos="fade-up" data-aos-duration="1500">
              <span className="fst-italic">L'art de transformer l'instant en opportunité </span><br/>
              Notre proposition de valeur s'appuie sur une trilogie d'expertises qui sont l'advertising,
              la data et la tech afin d'offrir aux Marques des solutions personnalisées et une approche
              complète au service de leur performance marketing et de la croissance business.
            </p>
          </div>
          <div className="singletab">
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              {/*<AboutMe isTabActive={isTabActive} />*/}
              <Experience isTabActive={isTabActive} />
              {/*<Education isTabActive={isTabActive} />*/}
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;
