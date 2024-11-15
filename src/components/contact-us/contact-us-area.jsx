import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";
import ContactUsForm from "../forms/contact-us-form";
import { SocialShare } from "../social-share";

const ContactUsArea = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <section className="contact-us-area">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-4 col-lg-6">
            <div className="contact-us-info">
              <h3 className="heading-title">Slogan của Masaru</h3>
              <ul className="address-list">
                <li>
                  <h5 className="title">Địa chỉ</h5>
                  <p>
                    Số 50 Cao Đức Lân, phường An Phú, Thành phố Thủ Đức, Thành
                    phố Hồ Chí Minh
                  </p>
                </li>
                <li>
                  <h5 className="title">Email</h5>
                  <p>
                    <a href="mailto:admin@masaruhr.vn">admin@masaruhr.vn</a>
                  </p>
                </li>
                <li>
                  <h5 className="title">Số điện thoại</h5>
                  <p>
                    <a href="tel:+0914135548598">(+091) 413 554 8598</a>
                  </p>
                </li>
              </ul>
              <ul className="social-share">
                <li>
                  <a href="#">
                    <i className="icon-share-alt"></i>
                  </a>
                </li>
                <SocialShare />
              </ul>
            </div>
          </div>

          <div className="offset-xl-2 col-lg-6">
            <div className="contact-form form-style-2">
              <div className="section-title">
                <h4 className="title">Liên hệ để nhận tư vấn </h4>
                <p>
                  Bạn vui lòng điền vào biểu mẫu dưới đây và chúng tôi sẽ liên
                  hệ lại với bạn ngay khi có thể.
                </p>
              </div>
              {/* form start */}
              <ContactUsForm />
              {/* form end */}
              <ul className="shape-group">
                <motion.li
                  className="shape-1 scene"
                  animate={{
                    x: mouseReverse(30).x,
                    y: mouseReverse(30).y,
                  }}
                >
                  <img src="/assets/images/about/shape-13.png" alt="Shape" />
                </motion.li>
                <motion.li
                  className="shape-2 scene"
                  animate={{
                    x: mouseDirection(30).x,
                    y: mouseDirection(30).y,
                  }}
                >
                  <img
                    src="/assets/images/counterup/shape-02.png"
                    alt="Shape"
                  />
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsArea;
