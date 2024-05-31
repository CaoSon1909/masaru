import Link from "next/link";
import { course_data } from "../../../data";
import CourseTypeOne from "../../course/course-type-one";

const CourseArea = ({ data }) => {
  console.log("data", data);
  return (
    <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
      <div className="container">
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="section-title section-center"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <h3 className="title">Đơn tuyển gấp trong tháng </h3>
            <Link href="/course-style-1">
              <>
                {new Date().getMonth()}/{new Date().getFullYear()}
              </>
            </Link>
          </div>

          {/* <div
            className="course-view-all"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <Link href="/course-style-1">
              <a className="edu-btn">
                Xem thêm nhiều công việc khác <i className="icon-4"></i>
              </a>
            </Link>
          </div> */}
        </div>

        <div className="row g-5" style={{ marginTop: "-50px" }}>
          {data
            ? data.data.slice(0, 4).map((course) => {
                return (
                  <div
                    className="col-md-6 col-xl-3"
                    data-sal-delay="150"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    key={course.id}
                  >
                    <CourseTypeOne data={course} />
                    {/* <CourseTypeFour data={course} /> */}
                  </div>
                );
              })
            : course_data.slice(0, 4).map((course) => {
                return (
                  <div
                    className="col-md-6 col-xl-3"
                    data-sal-delay="150"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    key={course.id}
                  >
                    <CourseTypeOne data={course} />
                    {/* <CourseTypeFour data={course} /> */}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
