import React from "react";
import useModal from "../../../hooks/use-modal";
import { Books } from "../../../svg";
import { VNDFormatCurrency } from "../../../utils/format-currency";
import VideoModal from "../popup-modal/video-modal";

const CourseDetailsSidebar = ({ course, details_2 = false }) => {
  const {
    img,
    certificate,
    videoId = "8ypRvNZhocU",
    course_price,
    instructor,
    duration,
    student,
    language,
    is_overtime,
    work_hour_per_day,
    overtime_salary,
  } = course || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  // const jobThumbnailImageUrl = `${BASE_API_URL}${img?.data[0]?.attributes?.url}`;

  return (
    <>
      <div
        className={`course-sidebar-3 ${
          details_2 ? "" : "sidebar-top-position"
        }`}
      >
        <div className="edu-course-widget widget-course-summery">
          <div className="inner">
            <div className="thumbnail">
              {/* <img src={jobThumbnailImageUrl ?? ""} alt="Course Thumb" /> */}
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
                className="play-btn video-popup-activation"
              >
                <i className="icon-18"></i>
              </a>
            </div>
            <div className="content">
              <h4 className="widget-title">Thông tin đơn hàng:</h4>
              <ul className="course-item">
                <li>
                  <span className="label">
                    <i className="icon-60"></i>Mức lương:
                  </span>
                  <span className="price">
                    {VNDFormatCurrency(course_price)} /tháng
                  </span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-62"></i>Nơi làm việc:
                  </span>
                  <span className="value">{instructor}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-61"></i>Thời gian làm việc:
                  </span>
                  <span className="value">{work_hour_per_day}H/Ngày</span>
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
                    <i className="icon-63"></i>Số lượng còn lại:
                  </span>
                  <span className="value">{student} người</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-59"></i>Ngôn ngữ:
                  </span>
                  <span className="value">{language}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-64"></i>Tăng ca:
                  </span>
                  <span className="value">{is_overtime}</span>
                </li>
              </ul>

              <div className="read-more-btn">
                <a
                  href="https://forms.gle/PxkUndXB7ycaHgX47"
                  rel="noreferrer"
                  target="_blank"
                  class="edu-btn btn-medium"
                >
                  Ứng tuyển
                  <i className="icon-4"></i>
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

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}

      {/* Start Contact Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header" style={{ padding: "2rem" }}>
              <h5 class="modal-title" id="exampleModalLabel">
                Gửi thông tin của bạn
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="modal-body"
              style={{ padding: "3rem", width: "max-content" }}
            >
              {/* <ContactUsForm /> */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf9AexFVf8NIhB6AZYEogKUvnwD3F6872rmjzGfQa3VPcFnHA/viewform?embedded=true"
                width="640"
                height="851"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Đang tải…
              </iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Modal */}
    </>
  );
};

export default CourseDetailsSidebar;
