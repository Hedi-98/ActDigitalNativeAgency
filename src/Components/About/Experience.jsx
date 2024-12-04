import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb-1.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Nos services</h2>
              {/*<p>*/}
              {/*  Neque porro quisquam est, qui dolorem ipsum quia dolor sit*/}
              {/*  consectetur, aliquam quaerats voluptatem. Ut enim ad minima*/}
              {/*  veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem*/}
              {/*  velit esse quam nihil*/}
              {/*</p>*/}
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 pra base w-75">Accompagne les Marques sur
                                                      des problématiques de déploiement
                                                      et d’optimisation d’écosystèmes
                                                      AdTech et Martech
                  </span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">TECH’ACT</h4>
                    {/*<p className="fz-18 pra d-block">UI Head & Manager</p>*/}
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base w-75">Améliore la stratégie et l’éfficacité
                                                      business grâce à l’exploitation de la Data,
                                                      la web analyse et l’optimisation du
                                                      customer journey
                  </span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">DAT'ACT</h4>
                    {/*<p className="fz-18 pra d-block">Head of Department</p>*/}
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base w-75">Apporte réponse à des besoins
                                                            de visibilité et d’optimisation de
                                                            la performance pour booster
                                                            le business des Marques</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">AD'ACT</h4>
                    {/*<p className="fz-18 pra d-block">Fiverr.com</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
