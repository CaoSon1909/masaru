import React from "react";
import { Books } from "../../svg";

const DetailsSidebar = () => {
  return (
    <div className="course-sidebar-3">
      <div className="edu-course-widget widget-course-summery">
        <div className="inner">
          <div className="content">
            <h4 className="widget-title">Thông tin đơn hàng:</h4>
            <ul className="course-item">
              <li>
                <span className="label">
                  <i className="icon-60"></i>Giá tiền:
                </span>
                <span className="value price">$70.00</span>
              </li>
              <li>
                <span className="label">
                  <i className="icon-62"></i>Nơi làm việc:
                </span>
                <span className="value">Edward Norton</span>
              </li>
              <li>
                <span className="label">
                  <i className="icon-61"></i>Thời gian làm việc:
                </span>
                <span className="value">3 weeks</span>
              </li>
              <li>
                <span className="label">
                  <Books />
                  Thời gian đào tạo:
                </span>
                <span className="value">8 tháng</span>
              </li>
              <li>
                <span className="label">
                  <i className="icon-63"></i>Đã đăng ký:
                </span>
                <span className="value">65 học viên</span>
              </li>
              <li>
                <span className="label">
                  <i className="icon-59"></i>Ngôn ngữ:
                </span>
                <span className="value">Tiếng Việt</span>
              </li>
              <li>
                <span className="label">
                  <i className="icon-64"></i>Cấp chứng chỉ quốc tế:
                </span>
                <span className="value">Yes</span>
              </li>
            </ul>

            <div className="read-more-btn">
              <a href="#" className="edu-btn">
                Ứng tuyển <i className="icon-4"></i>
              </a>
            </div>

            <div className="share-area">
              <h4 className="title">Chia sẻ với bạn bè: </h4>
              <ul className="social-share">
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
