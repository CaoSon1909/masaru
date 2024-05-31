import React from "react";
import { BASE_API_URL } from "../../../utils/base-api-url";

const brandsDefault = [
  "/assets/images/brand/brand-01.png",
  "/assets/images/brand/brand-02.png",
  "/assets/images/brand/brand-03.png",
  "/assets/images/brand/brand-04.png",
  "/assets/images/brand/brand-05.png",
  "/assets/images/brand/brand-06.png",
];

const BrandArea = ({ about_p_2, data }) => {
  const brands = data?.brand_images.data.map(
    (brand) => `${BASE_API_URL}${brand.attributes.url}`
  );
  return (
    <>
      <div className="brand-title">
        <h2 className="title">
          <span className="color-secondary">
            Một số đối tác thân thiết của Masaru
          </span>
        </h2>
        <span className="color-secondary">
          <i className="icon-19"></i>
        </span>
      </div>

      <div
        className={`edu-brand-area ${
          about_p_2 ? "brand-area-5" : "brand-area-4 gap-lg-bottom-equal"
        }`}
      >
        <div className="container">
          <div className="brand-grid-wrap brand-style-2">
            {brands?.map((brandSrc, i) => (
              <div key={i} className="brand-grid">
                <img src={brandSrc} alt="Brand Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
