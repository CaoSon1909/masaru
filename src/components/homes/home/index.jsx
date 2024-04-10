import React, { useRef } from "react";
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
import Navigation from "./navigation";
import Container from "./container";
import useScrollSnap from "react-use-scroll-snap";
import CareerPath from "./career-path";

const index = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  return (
    // <Container />
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* <Navigation /> */}
        <Header />
        <HeroArea />
        <CategoryArea />
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
          ref={scrollRef}
        >
          {/* <section id="top-categories">
              <TopCategories />
            </section> */}
          <section id="courses">
            <CourseArea />
          </section>
          <section id="about">
            <AboutArea />
          </section>
          <section id="counter-up">
            <CounterUpArea />
          </section>
          <section id="testimonials">
            <TestimonialArea />
          </section>
          <section id="career-path">
            <CareerPath />
          </section>
          <section id="team">
            <TeamArea />
          </section>
          <section className="ad-banner" id="ad-banner">
            <AdBanner />
          </section>
          <section className="brand" id="brand">
            <BrandArea />
          </section>
          <section id="blog">
            <BlogArea />
          </section>
          <section className="footer" id="footer">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
};

export default index;
