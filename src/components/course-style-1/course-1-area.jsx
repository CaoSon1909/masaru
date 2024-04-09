import React from "react";
import { useState } from "react";
import { course_data } from "../../data";
import SortingArea from "../course-filter/sorting-area";
import CourseItems from "../course-style-4/course-items";
import CourseTypeOne from "../course/course-type-one";

const CourseArea = ({ isNested }) => {
  const coursePerView = 8;
  const [next, setNext] = useState(coursePerView);
  const [courses, setCourses] = useState(course_data);
  const [showing, setShowing] = useState(0);
  // handleLoadData
  const handleLoadData = () => {
    setNext((value) => value + 4);
  };
  return (
    <div className="edu-course-area course-area-1 gap-tb-text">
      <div className="container">
        {/* If isNested, only display list view */}
        {isNested ? (
          <div className="row g-5">
            <CourseItems
              itemsPerPage={6}
              items={courses.length == 0 ? courses : course_data}
              course_style="8"
              setShowing={setShowing}
            />
          </div>
        ) : (
          <>
            <SortingArea
              course_items={course_data}
              num={courses?.slice(0, next)?.length}
              setCourses={setCourses}
              courses={courses}
            />
            <div className="row g-5">
              {courses.slice(0, next)?.map((course) => {
                return (
                  <div key={course.id} className="col-md-6 col-xl-3">
                    <CourseTypeOne data={course} classes="course-box-shadow" />
                  </div>
                );
              })}
            </div>
          </>
        )}

        {next < courses.length && (
          <div
            onClick={handleLoadData}
            className="load-more-btn"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <a className="edu-btn" style={{ cursor: "pointer" }}>
              Hiển thị thêm <i className="icon-56"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseArea;
