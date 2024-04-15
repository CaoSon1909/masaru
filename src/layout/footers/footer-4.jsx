import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useMouseMoveUI } from "../../contexts/mouse-move-context";
import FooterSocial from "./component/footer-social";

const footer_contents = {
  desc: "“Giỏi về tay nghề - vững vàng kỹ năng – Ổn định nghề nghiệp – Tương lai phát triển”",
  add: "Số 50 Cao Đức Lân, phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
  call: "+01 123 5641 231",
  email: "contact@masaruhr.vn",
  widgets: [
    {
      col: "3",
      class: "explore-widget",
      widget_title: "Nền tảng học trực tuyến",
      footer_links: [
        { link: "about-1", title: "Về chúng tôi" },
        { link: "course-style-1", title: "Khóa học" },
        { link: "team-1", title: "Đội ngũ sáng lập Masaru" },
        { link: "event-grid", title: "Sự kiện" },
        { link: "team-details", title: "Hồ sơ giảng viên" },
        { link: "purchase-guide", title: "Hướng dẫn mua hàng" },
      ],
    },
    {
      col: "2",
      class: "quick-link-widget",
      widget_title: "Links",
      footer_links: [
        { link: "contact-us", title: "Liên hệ chúng tôi" },
        { link: "gallery-grid", title: "Kho ảnh" },
        { link: "blog-standard", title: "Tin tức và bài viết" },
        { link: "faq", title: "FAQ" },
        { link: "sign-in", title: "Đăng nhập/Đăng ký" },
        { link: "coming-soon", title: "Sắp có" },
      ],
    },
  ],
};

const { add, call, desc, email, widgets } = footer_contents;

const FooterTwo = () => {
  const { mouseDirection, mouseReverse } = useMouseMoveUI();
  return (
    <footer className="edu-footer footer-light footer-for-yoga footer-style-5">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">Địa chỉ</h4>
                <div className="inner">
                  <p className="description">{desc}</p>
                  <div className="widget-information">
                    <ul className="information-list">
                      <li>
                        <span>Địa chỉ:</span>
                        {add}
                      </li>
                      <li>
                        <span>SĐT:</span>
                        <a href="tel:+011235641231">{call}</a>
                      </li>
                      <li>
                        <span>Email:</span>
                        <a
                          href="mailto:contact@masaruhr.vn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {email}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {widgets.map((w, i) => (
              <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                <div className={`edu-footer-widget ${w.class}`}>
                  <h4 className="widget-title">{w.widget_title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {w.footer_links.map((l, i) => (
                        <li key={i}>
                          <Link href={`/${l.link}`}>
                            <a>{l.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-4 col-md-6">
              <div className="edu-footer-widget">
                <h4 className="widget-title">LIên hệ</h4>
                <div className="inner">
                  <p className="description">
                    Nhập email để nhận những thông tin ưu đãi mới nhất từ Masaru
                  </p>
                  <div className="input-group footer-subscription-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                    <button className="edu-btn btn-medium" type="button">
                      Subscribe <i className="icon-4"></i>
                    </button>
                  </div>
                  <ul className="social-share icon-transparent">
                    <FooterSocial />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="shape-group shape-group-2">
          <motion.li
            className="shape-1 scene"
            animate={{
              x: mouseDirection(30).x,
              y: mouseDirection(30).y,
            }}
          >
            <img src="/assets/images/others/shape-06.png" alt="shape" />
          </motion.li>
          <motion.li
            className="shape-2 scene"
            animate={{
              x: mouseReverse(30).x,
              y: mouseReverse(30).y,
            }}
          >
            <img src="/assets/images/others/shape-07.png" alt="shape" />
          </motion.li>
          <li className="shape-3">
            <img src="/assets/images/about/shape-10.png" alt="shape" />
          </li>
          <motion.li
            className="shape-4 scene"
            animate={{
              x: mouseReverse(30).x,
              y: mouseReverse(30).y,
            }}
          >
            <img src="/assets/images/others/shape-08.png" alt="shape" />
          </motion.li>
          <motion.li
            className="shape-5 scene"
            animate={{
              x: mouseDirection(30).x,
              y: mouseDirection(30).y,
            }}
          >
            <img src="/assets/images/others/shape-09.png" alt="shape" />
          </motion.li>
        </ul>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p>
                  Bản quyền {new Date().getFullYear()}
                  <a
                    href="https://masaruhr.vn"
                    rel="noreferrer"
                    target="_blank"
                  >
                    thuộc về Masaru
                  </a>{" "}
                  Thiết kế bởi{" "}
                  <a
                    href="https://github.com/CaoSon1909"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Son Pham - Masaru
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
