import React from "react";
import { instructors_data } from "../../../data";
import TeamTwo from "../../../components/team-member/team-two";

const TeamArea = () => {
  return (
    <div className="edu-team-area team-area-2 edu-section-gap">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">Đội ngũ sáng lập Masaru</span>
          <h2 className="title">Đội ngũ thành lập Masaru</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>

        <div className="row g-5">
          {instructors_data.slice(0, 6).map((instructor) => {
            return (
              <div
                key={instructor.id}
                className="col-lg-4 col-md-6"
                data-sal-delay="100"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <TeamTwo instructor={instructor} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
