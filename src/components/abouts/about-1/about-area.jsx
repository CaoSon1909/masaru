import { motion } from "framer-motion";
import React from "react";
import { useMouseMoveUI } from "../../../contexts/mouse-move-context";
import { BASE_API_URL } from "../../../utils/base-api-url";

const AboutArea = ({ data }) => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  const largeImageUrl = `${BASE_API_URL}${data?.about_large_img.data.attributes.url}`;
  const smallImageUrl = `${BASE_API_URL}${data?.about_small_img.data.attributes.url}`;
  return (
    <div className="section-gap-large edu-about-area about-style-7">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <div className="about-content">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">Về chúng tôi - MASARU</span>
                <h2 className="title">
                  <span className="color-secondary">{data?.about_title}</span>
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p>{data?.about_desc}</p>
              </div>
              <ul
                className="features-list"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                {data?.about_benefits.map((benefit, i) => (
                  <li key={i}>{benefit.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-image-gallery">
              {/* <img
                className="main-img-1"
                src={smallImageUrl}
                alt="About Image"
              /> */}
              <img
                className="main-img-2"
                src={largeImageUrl}
                data-sal-delay="150"
                data-sal="slide-down"
                data-sal-duration="800"
                alt="About Image"
              />
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img src="/assets/images/about/shape-38.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img src="/assets/images/about/shape-37.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-3 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img src="/assets/images/about/shape-04.png" alt="Shape" />
                </motion.li>
                <li
                  className="shape-4 scene"
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                >
                  <img
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li
          className="shape-1"
          data-sal-delay="500"
          data-sal="fade"
          data-sal-duration="200"
        ></li>
      </ul>
    </div>
  );
};

export default AboutArea;
