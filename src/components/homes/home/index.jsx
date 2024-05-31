import ReactFullpage from "@fullpage/react-fullpage";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../../layout";
import { BASE_API_URL } from "../../../utils/base-api-url";
import LoadingComponent from "../../common/loading/loading-component";
import AboutArea from "./about-area";
import AdBanner from "./ad-banner";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import CounterUpArea from "./counter-up-area";
import CourseArea from "./course-area";
import HeroArea from "./hero-area";
import TestimonialArea from "./testimonial-area";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setJobData] = useState(null);

  const fetchData = async () => {
    const apiPath = `${BASE_API_URL}/api/jobs?populate=*`;
    const res = await fetch(apiPath, {
      method: "GET",
      headers: {
        Authorization: process.env.API_TOKEN,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setJobData(data);
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => setIsLoading(false), 2600);
  }, []);

  const anchors = ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."];

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="sticky-header">
        <div id="main-wrapper" className="main-wrapper">
          <Header />
          <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            scrollingSpeed={1000}
            scrollBar={false}
            loopBottom={true}
            loopHorizontal={true}
            loopTop={true}
            verticalCentered={true}
            autoScrolling={true}
            render={({ state, fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <HeroArea />
                  </div>
                  {/* <TopCategories /> */}
                  <div className="section">
                    <CourseArea data={jobData} />
                  </div>
                  {/* <CategoryArea /> */}
                  <div className="section">
                    <AboutArea />
                  </div>
                  <div className="section">
                    <CounterUpArea />
                  </div>
                  <div className="section">
                    <TestimonialArea />
                  </div>
                  {/* <CareerPath /> */}
                  {/* <TeamArea /> */}
                  <div className="section">
                    <AdBanner />
                  </div>
                  <div className="section">
                    <BrandArea />
                  </div>
                  <div className="section">
                    <BlogArea />
                  </div>
                  <div className="section">
                    <Footer />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default index;
