import ReactFullpage from "@fullpage/react-fullpage";
import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../../layout";
import { BASE_API_URL } from "../../../utils/base-api-url";
import Breadcrumb from "../../breadcrumb/breadcrumb";
import Testimonial from "../../homes/home-distant-learning/testimonial";
import TeamArea from "../../homes/home-online-academy/team-area";
import AboutArea from "./about-area";
import BrandArea from "./brand-area";
import CounterArea from "./counter-area";
import WhyChose from "./why-chose";

const index = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const aboutApiUrl = `${BASE_API_URL}/api/abouts?populate=*`;
    const res = await fetch(aboutApiUrl, {
      method: "GET",
      headers: {
        Authorization: process.env.API_TOKEN,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const result = mappingData(data);
    setData(result);
  };

  const mappingData = (array) => {
    return {
      about_benefits: array.data[0]?.attributes.about_benefits,
      about_desc: array.data[0]?.attributes.about_desc,
      breadcum_title: array.data[0]?.attributes.breadcum_title,
      breadcum_subtitle: array.data[0]?.attributes.breadcum_subtitle,
      about_title: array.data[0]?.attributes.about_title,
      why_choose_pretitle: array.data[0]?.attributes.why_choose_pretitle,
      why_choose_title: array.data[0]?.attributes.why_choose_title,
      choose_box_1_title: array.data[0]?.attributes.choose_box_1_title,
      choose_box_1_subtitle: array.data[0]?.attributes.choose_box_1_subtitle,
      choose_box_2_title: array.data[0]?.attributes.choose_box_2_title,
      choose_box_2_subtitle: array.data[0]?.attributes.choose_box_2_subtitle,
      choose_box_3_title: array.data[0]?.attributes.choose_box_3_title,
      choose_box_3_subtitle: array.data[0]?.attributes.choose_box_3_subtitle,
      testimonial_desc: array.data[0]?.attributes.testimonial_desc,
      about_large_img: array.data[0]?.attributes.about_large_img,
      about_small_img: array.data[0]?.attributes.about_small_img,
      brand_images: array.data[0]?.attributes.brand_images,
      breadcum_background: array.data[0]?.attributes.breadcum_background,
    };
  };

  const breadcrumbProps = {
    sub_title: data?.breadcum_subtitle,
    title: data?.breadcum_title,
    current_page: "Về chúng tôi - MASARU #1",
    breadcum_background: data?.breadcum_background,
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <ReactFullpage
          // anchors={anchors}
          navigation
          // navigationTooltips={anchors}
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
                <Header no_top_bar={true} />
                <div className="section">
                  <Breadcrumb {...breadcrumbProps} />
                </div>
                <div className="section">
                  <AboutArea data={data} />
                </div>
                <div className="section">
                  <BrandArea data={data} />
                </div>
                <div className="section">
                  <WhyChose data={data} />
                </div>
                <div className="section">
                  <Testimonial data={data} />
                </div>
                <div className="section">
                  <CounterArea />
                </div>
                <div className="section">
                  <TeamArea about_p={true} />
                </div>
                <Footer style_2={"footer-dark bg-image footer-style-2"} />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </div>
  );
};

export default index;
