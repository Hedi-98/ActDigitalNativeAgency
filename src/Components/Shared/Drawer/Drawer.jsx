import React from "react";
import {XLg, ChevronRight, Whatsapp, Linkedin, Globe} from "react-bootstrap-icons";
import favicon from "../../../assets/img/logo/favicon.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const socalIcon = [
  // {
  //   id: 1,
  //   icon: <Facebook />,
  // },
  // {
  //   id: 2,
  //   icon: <Twitter />,
  // },
  {
    id: 2,
    icon: <Whatsapp />,
    lien: "https://wa.me/33662290992"
  },
  {
    id: 3,
    icon: <Linkedin />,
    lien: "https://www.linkedin.com/company/act-digital-native-agency"
  },
  {
    id: 4,
    icon: <Globe />,
    lien: "https://www.actdna.com"
  },
  // {
  //   id: 5,
  //   icon: <Instagram />,
  // },
];

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo text-center">
          <img src={favicon} alt="img" />
        </Link>
        <p>
          Notre proposition de valeur s'appuie sur une trilogie d'expertises qui sont l'advertising,
          la data et la tech afin d'offrir aux Marques des solutions personnalisées et une approche
          complète au service de leur performance marketing et de la croissance business.
        </p>
        <div className="sub__contact-left d-grid">
          {/*<div className="sub__contac-item">*/}
          {/*  <div className="content">*/}
          {/*    <span className="address d-block"> address </span>*/}
          {/*    <span className="textp"> Victoria Street London, </span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link className="textp" to="mailto:contact@act-dna.com">contact@act-dna.com</Link>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> call now </span>
              <Link className="textp" to="https://wa.me/33662290992"> (+33)6 62 29 09 92 </Link>
            </div>
          </div>
        </div>
        <div className="sub__contact-right mb-80 position-relative">
          <ul className="social d-flex gap-3">
            {socalIcon.map(({ icon, id }) => (
              <li key={id}>
                <Link>
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*<Link*/}
        {/*  to={""}*/}
        {/*  className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"*/}
        {/*>*/}
        {/*  <span>*/}
        {/*    <i>*/}
        {/*      <ChevronRight />*/}
        {/*    </i>*/}
        {/*  </span>*/}
          {/*<span className="get__text"> Let's Talk </span>*/}
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default Drawer;
