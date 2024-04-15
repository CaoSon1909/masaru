import React from "react";
import Counter from "../../common/counter";

const data = [
  {
    icon: "icon-77",
    count: 29.3,
    text: "K",
    title: "Học viên đã tham gia",
    decimal: 1,
  },
  {
    icon: "icon-78",
    count: 32.4,
    text: "K",
    title: "Khóa học đã hoàn thành",
    decimal: 1,
    extraClass: "icon-flower",
  },
  {
    icon: "icon-79",
    count: 100,
    text: "%",
    title: "Được cấp chứng chỉ",
  },
  {
    icon: "icon-80",
    count: 354,
    text: "%",
    title: "Đội ngũ thành lập Masaru",
  },
];

const CounterArea = () => {
  return (
    <div className="counterup-area-11">
      <div className="container">
        <div className="row g-5">
          {data.map((c, i) => (
            <div key={i} className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="edu-counterup counterup-style-6">
                <div className={`icon ${c.extraClass ? c.extraClass : ""}`}>
                  <i className={c.icon}></i>
                </div>
                <div className="counterup-wrapper">
                  <h2 className="counter-item count-number">
                    <span className="odometer">
                      <Counter
                        number={parseFloat(c.count)}
                        text={c.text}
                        decimal={c.decimal}
                      />
                    </span>
                  </h2>
                  <h6 className="title">{c.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
