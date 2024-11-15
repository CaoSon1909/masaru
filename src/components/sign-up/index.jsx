import React from "react";
import { Footer, Header } from "../../layout";
import BreadcrumbThree from "../breadcrumb/breadcrumb-3";
import SignUpArea from "./sign-up-area";

const index = () => {
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree title="Đăng ký" subtitle="Đăng ký" />
        <SignUpArea />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default index;
