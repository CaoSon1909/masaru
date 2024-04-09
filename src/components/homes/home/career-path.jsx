import React from "react";

const MasaruStudent = () => {
  return (
    <div className="masaru-student">
      <img
        src={"/assets/images/career-path/graduated.png"}
        alt="MasaruStudent"
      />
      <div className="content">
        Sinh viên năm cuối
        <br />
        Sinh viên mới ra trường
        <br />
        TC/CĐ/ĐH
      </div>
    </div>
  );
};

const MasaruEdu = () => {
  return (
    <div className="masaru-edu">
      <div className="image">
        <img src={"/assets/images/brand/brand-04.png"} alt="Logo_Masaru" />
      </div>
      <div className="content">
        <div className="title-1">Giáo dục</div>
        <div className="title-2">Masaru Edu</div>
        <div className="meta-data">
          Đào tạo ngoại ngữ (Tiếng Nhật) <br />
          Đào tạo kỹ năng nghề làm việc theo phong cách Nhật Bản <br />
          Đào tạo nghề ngắn hạn (3 tháng) <br />
        </div>
      </div>
    </div>
  );
};

const QualifiedEmployee = () => {
  return (
    <div className="qualified-employee">
      <img src={"/assets/images/career-path/worker.png"} alt="worker" />
      <div className="content">
        Nhân lực chất lượng <br />
        Biết tiếng Nhật N4 <br />
        Thành thạo kỹ năng làm việc
        <br />
        Giỏi tay nghề
      </div>
    </div>
  );
};

const MasaruHR = () => {
  return (
    <div className="masaru-hr">
      <div className="image">
        <img src={"/assets/images/brand/brand-04.png"} alt="Logo_Masaru" />
      </div>
      <div className="content">
        <div className="title-1">
          Giới thiệu <br /> việc làm
        </div>
        <div className="title-2">Masaru HR</div>
        <div className="meta-data">
          Tìm kiếm doanh nghiệp Nhật Bản
          <br />
          Làm hồ sơ phái cử (Cục QLLĐ NN) Quản lý NLĐ tại Nhật <br />
          Giới thiệu việc làm khi hết HĐ (Tokutei, kỹ sư) và các công việc khác
          có liên quan <br />
        </div>
      </div>
    </div>
  );
};

const QualifiedEngineer = () => {
  return (
    <div className="qualified-engineer">
      <img src={"/assets/images/career-path/workers.png"} alt="workers" />
      <div className="content">
        Thực tập sinh
        <br />
        Kỹ sư
        <br />
        Tokutei
        <br />
        Kaigo
        <br />
      </div>
    </div>
  );
};

const MasaruLink = () => {
  return (
    <div className="masaru-link">
      <div className="image">
        <img src={"/assets/images/brand/brand-04.png"} alt="Logo_Masaru" />
      </div>
      <div className="content">
        <div className="title-1">Kết nối</div>
        <div className="title-2">Masaru HR</div>
        <div className="meta-data">
          Tìm kiếm mặt bằng
          <br />
          Tư vấn đầu tư <br />
          Kết nối thị trường <br />
          Tuyển dụng nhân sự <br />
          Tổ chức hội thảo
        </div>
      </div>
    </div>
  );
};

const MasaruInvestment = () => {
  return (
    <div className="masaru-investment">
      <img
        src={"/assets/images/career-path/financial-growth.png"}
        alt="financial-growth"
      />
      <div className="content">Đầu tư về Việt Nam</div>
    </div>
  );
};

const MasaruArrow = () => {
  return (
    <div className="masaru-arrow">
      <img
        src={"/assets/images/career-path/right-arrow.png"}
        alt="right-arrow"
      />
    </div>
  );
};

const CareerPath = () => {
  return (
    <div className="career-path">
      <MasaruStudent />
      <MasaruArrow />
      <MasaruEdu />
      <MasaruArrow />
      <QualifiedEmployee />
      <QualifiedEmployee />
      <MasaruArrow />
      <MasaruHR />
      <MasaruArrow />
      <QualifiedEngineer />
      <QualifiedEngineer />
      <MasaruArrow />
      <MasaruLink />
      <MasaruArrow />
      <MasaruInvestment />
    </div>
  );
};

export default CareerPath;
