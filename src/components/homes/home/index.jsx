import React from "react";
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

const index = () => {
  return (
    // <Container />
    <div className="sticky-header-container">
      <div className="sticky-header">
        <div id="main-wrapper" className="main-wrapper">
          <Navigation />
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            data-bs-offset="0"
            class="scrollspy-example"
            tabindex="0"
          >
            <Header />
            <section id="scrollspyHeading1" className="hero">
              <HeroArea />
            </section>
            <section id="scrollspyHeading2" className="category">
              <CategoryArea />
            </section>
            <section id="scrollspyHeading3" className="top-category">
              <TopCategories />
            </section>
            <section id="scrollspyHeading4">
              <AboutArea />
            </section>
            <section id="scrollspyHeading5">
              <CourseArea />
            </section>
            <section id="scrollspyHeading6">
              <CounterUpArea />
            </section>
            <section id="scrollspyHeading7">
              <TestimonialArea />
            </section>
            <section id="scrollspyHeading8">
              <CtaArea />
            </section>
            <section id="scrollspyHeading9">
              <TeamArea />
            </section>
            <section className="ad-banner" id="ad-banner">
              <AdBanner />
            </section>
            <section className="brand" id="brand">
              <BrandArea />
            </section>
            <section id="scrollspyHeading10">
              <BlogArea />
            </section>
            <section className="footer" id="footer">
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
