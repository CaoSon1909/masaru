import React from "react";
import Counter from "../../common/counter";

const counter_data = [
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
  },
  { icon: "icon-79", count: 100, text: "%", title: "Được cấp chứng chỉ" },
  { icon: "icon-80", count: 354, text: "+", title: "Đội ngũ thành lập Masaru" },
];

const CounterArea = () => {
  return (
    <div className="counterup-area-6">
      <div className="container">
        <div className="row g-5">
          {counter_data.map((count, i) => (
            <div key={i} className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="edu-counterup counterup-style-6">
                <div className="icon">
                  <i className={count.icon}></i>
                </div>
                <h2 className="counter-item count-number">
                  <span className="odometer">
                    <Counter
                      number={parseFloat(count.count)}
                      text={count.text}
                      decimal={count.decimal}
                    />
                  </span>
                </h2>
                <h6 className="title">{count.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
