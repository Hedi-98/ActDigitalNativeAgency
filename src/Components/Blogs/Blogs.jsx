import React from "react";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import { Link, Outlet, useLocation } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();

  // Check if a specific blog route is active
  const isBlogDetailsRoute = location.pathname !== "/blog";

  return (
      <section className="blog__section overhid pt-120 pb-120" id="blog">
        <div className="container">
          {isBlogDetailsRoute ? (
              <Outlet />
          ) : (
              <div className="row g-4">
                <div className="col-xl-4 col-lg-3">
                  <div className="project__head">
                    <h2
                        className="fw-500 mt-3 text-black"
                        data-aos="fade-down"
                        data-aos-duration="1500"
                    >
                      Nos Articles
                    </h2>
                    <div className="blog__hoverbox">
                      <Link
                          className="hover__circle wow fadeInUp"
                          data-wow-duration="1.6s"
                          to="/"
                      >
                    <span className="box">
                      <i className="bi bi-arrow-up-right"></i>
                      <span className="textmore text-white"> Page d'acceuil </span>
                    </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9">
                  <div className="blog__rightwrap">
                    <div className="service__uniquewrap">
                      {blogsList.slice(0, 3).map(({ id, date, image, heading, linkUrl }) => (
                          <Blog key={id} date={date} image={image} heading={heading} linkUrl={linkUrl} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
};

export default Blogs;
