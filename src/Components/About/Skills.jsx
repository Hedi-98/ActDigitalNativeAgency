import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
// import figma from "../../assets/img/about/figma.png";
// import word from "../../assets/img/about/word.png";
// import html from "../../assets/img/about/html.png";
// import boot from "../../assets/img/about/boot.png";
import {Globe, Linkedin, Whatsapp} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

const skillsList = [
  {
    id: 1,
    system: "Email",
    contact: "contact@act-dna.com",
  },
  {
    id: 2,
    system: "Téléphone",
    contact: "(+33)6 62 29 09 92",
  },
  {
    id: 3,
    system: "Adresse",
    contact: "Paris, France",
  },
  {
    id: 4,
    system: "Follow",
    socalContact: [
      // <Facebook />,
      // <Twitter />,
      {
        id: 41,
        icon: <Whatsapp />,
        lien: "https://wa.me/33662290992"
      },
      {
        id: 42,
        icon: <Linkedin />,
        lien: "https://www.linkedin.com/company/act-digital-native-agency"
      },
      {
        id: 43,
        icon: <Globe />,
        lien: "https://www.actdna.com"
      }
      // <Instagram />,
    ],
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Contact</h2>
              {/*<p>*/}
              {/*  Neque porro quisquam est, qui dolorem ipsum quia dolor sit*/}
              {/*  consectetur, aliquam quaerats voluptatem. Ut enim ad minima*/}
              {/*  veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem*/}
              {/*  velit esse quam nihil*/}
              {/*</p>*/}
              <div className="about__contactwrap">
                {/*<div className="row g-4">*/}
                {/*  {skillsList.map(({id, skill, image, percentage}) => {*/}
                {/*    return (*/}
                {/*      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">*/}
                {/*        <div className="abox myskill__item">*/}
                {/*          <div className="thumb">*/}
                {/*            <img src={image} alt="img" />*/}
                {/*          </div>*/}
                {/*          <div className="mys">*/}
                {/*            <span className="ptext fz-18 mb-15 d-block">{skill}</span>*/}
                {/*            <h1 className="fw-600">{percentage}</h1>*/}
                {/*          </div>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    );*/}
                {/*  })}*/}

                {/*</div>*/}
                  <div className="row g-4">
                    {skillsList.map(({ id, contact, socalContact, system }) => {
                      return (
                        <div
                          key={id}
                          className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                          data-aos="zoom-in"
                        >
                          <div className="abox">
                            <div className="about__contbox__item">
                              <span className="ptext fz-18 mb-20 d-block">
                                {system}
                              </span>
                              <p className="text-white">{contact}</p>
                              {socalContact && (
                                <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                  {socalContact.map(({ icon, id, lien }) => (
                                    <li key={id}>
                                      <Link to={lien}>{icon} </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
