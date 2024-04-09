import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import {
  add_force_page,
  add_item_offset,
} from "../../redux/features/filter-slice";

const SortingArea = ({
  course_items,
  num,
  setCourses,
  courses,
  course_list,
  items,
  isNested,
}) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value === "Lọc") {
      setCourses(course_items);
    } else if (e.target.value === "Thấp đến cao") {
      const lowToHigh = courses
        .slice()
        .sort(
          (a, b) => parseFloat(a.course_price) - parseFloat(b.course_price)
        );
      setCourses(lowToHigh);
    } else if (e.target.value === "Cao đến thấp") {
      const highToHigh = courses
        .slice()
        .sort(
          (a, b) => parseFloat(b.course_price) - parseFloat(a.course_price)
        );
      setCourses(highToHigh);
    }
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  };

  return (
    <div className="edu-sorting-area">
      <div className="sorting-left">
        {items ? (
          <h6 className="showing-text">
            Hiển thị <span>{num}</span> of <span>{items.length}</span> đơn hàng
          </h6>
        ) : (
          <h6 className="showing-text">
            Hiển thị <span>{num}</span> đơn hàng
          </h6>
        )}
      </div>
      <div className="sorting-right">
        <div className="layout-switcher">
          <label>{course_list ? "Danh sách" : "Lưới"}</label>
          <ul className="switcher-btn">
            <li>
              <Link href="/course-style-1">
                <a className={!course_list ? "active" : ""}>
                  <i className="icon-53"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/course-style-4">
                <a className={course_list ? "active" : ""}>
                  <i className="icon-54"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="edu-sorting">
          <div className="icon">
            <i className="icon-55"></i>
          </div>
          <select onChange={handleChange} className="edu-select">
            <option>Lọc</option>
            <option>Thấp đến cao</option>
            <option>Cao đến thấp</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortingArea;
