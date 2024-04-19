import React, { useEffect, useRef, useState } from "react";
import { Footer, Header } from "../../../layout";
import AboutArea from "./about-area";
import AdBanner from "./ad-banner";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import CategoryArea from "./category-area";
import CounterUpArea from "./counter-up-area";
import CourseArea from "./course-area";
import CtaArea from "./cta-area";
import HeroArea from "./hero-area";
import TeamArea from "./team-area";
import TestimonialArea from "./testimonial-area";
import TopCategories from "./top-categories";
import Container from "./container";
import useScrollSnap from "react-use-scroll-snap";
import CareerPath from "./career-path";
import LoadingComponent from "../../common/loading/loading-component";
import ReactFullpage from "@fullpage/react-fullpage";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
                <>
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <HeroArea />
                    </div>
                    {/* <TopCategories /> */}
                    <div className="section">
                      <CourseArea />
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
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default index;
