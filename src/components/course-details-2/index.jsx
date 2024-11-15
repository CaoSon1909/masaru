import React from "react";
import { Footer, Header } from "../../layout";
import CourseBreadcrumb from "../breadcrumb/breadcrumb-5";
import CourseDetailsTwo from "./course-details-two";

const index = ({ course }) => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <CourseBreadcrumb course={course} subtitle="Thông tin đơn hàng" />
        <CourseDetailsTwo course={course} />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default index;
