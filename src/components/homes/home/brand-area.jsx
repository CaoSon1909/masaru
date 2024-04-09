const brand_contents = {
  pre_title: "Đối tác của Masaru",
  title: "Một số công ty đã hợp tác với Masaru",
  text: "Dựa trên tinh thần win-win, đôi bên cùng có lợi",
  brands: [
    "assets/images/brand/brand-01.png",
    "assets/images/brand/brand-02.png",
    "assets/images/brand/brand-03.png",
    "assets/images/brand/brand-04.png",
    "assets/images/brand/brand-05.png",
    "assets/images/brand/brand-06.png",
    "assets/images/brand/brand-07.png",
    "assets/images/brand/brand-08.png",
  ],
};

const { pre_title, title, text, brands } = brand_contents;

const BrandArea = () => {
  return (
    <div className="edu-brand-area brand-area-1 gap-top-equal">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="brand-section-heading">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">{pre_title}</span>
                <h2 className="title">{title}</h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p>{text}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="brand-grid-wrap">
              {brands.map((b, i) => (
                <div key={i} className="brand-grid">
                  <img src={b} alt="Brand Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
