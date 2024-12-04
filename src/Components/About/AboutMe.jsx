import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram, Whatsapp,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/about/personal-infothumb.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "Matias999@Gmail.Com",
  },
  {
    id: 2,
    system: "Phone",
    contact: "(+33)6 62 29 09 92",
  },
  {
    id: 3,
    system: "Phone",
    contact: "Victoria Street London,",
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
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Notre valeur ajoutée
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Notre proposition de valeur s'appuie sur une trilogie d'expertises qui sont l'advertising,
                la data et la tech afin d'offrir aux Marques des solutions personnalisées et une approche
                complète au service de leur performance marketing et de la croissance business.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
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
                            <Link to={""}>{contact}</Link>
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

export default AboutMe;
