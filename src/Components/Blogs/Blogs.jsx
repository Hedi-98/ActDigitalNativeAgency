import {useRef, useState} from "react";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import { Outlet, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Blogs = () => {
  const location = useLocation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceId = "service_65lzo8b";
        const templateId = "template_7xaf7ym";
        const userId = "HNRsS6ej7z7nq8BsW";
        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: userId,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

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
                      Nos articles
                    </h2>
                    <div className="blog__hoverbox">
                      <div
                          className="hover__circle wow fadeInUp"
                          data-wow-duration="1.6s"
                      >
                    <span className="box">
                      <span className="textmore text-white">
                        Abonnez vous à notre newsletter
                      </span>

                      <form ref={form} onSubmit={sendEmail}>
                        <div className="col-lg-12">
                          <input className="mt-3 mb-3 text-black text-center" name="email" type="email" placeholder="Email"/>
                        </div>
                        <input type="submit" value="S'abonner" className="text-center cmn--btn align-items-center">
                        </input>
                      </form>
                    </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9">
                  <div className="blog__rightwrap">
                    <div className="service__uniquewrap">
                      {blogsList.slice(0, 3).map(({id, date, image, heading, linkUrl}) => (
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
